import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';
import { ErrorInterceptor } from './helpers/ErrorInterceptor';
import { JwtInterceptor } from './helpers/JwtInterceptor';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { PicturesComponent } from './pictures/pictures.component';
import { AddTopicComponent } from './add-topic/add-topic.component';
import { AddPictureComponent } from './add-picture/add-picture.component';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    appRoutingModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    PicturesComponent,
    AddTopicComponent,
    AddPictureComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
