import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './helpers/auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { PicturesComponent } from './pictures/pictures.component';
import { AddTopicComponent } from './add-topic/add-topic.component';
import { AddPictureComponent } from './add-picture/add-picture.component';


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },

  { path: 'topic', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'pictures', component: PicturesComponent, canActivate: [AuthGuard] },

  { path: 'addTopic', component: AddTopicComponent, canActivate: [AuthGuard] },
  { path: 'addPicture', component: AddPictureComponent, canActivate: [AuthGuard] },
  // otherwise redirect to home
  { path: '**', redirectTo: '/login' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
