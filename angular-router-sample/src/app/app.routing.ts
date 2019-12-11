import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './helpers/auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { PicturesComponent } from './pictures/pictures.component';
import { AddTopicComponent } from './add-topic/add-topic.component';


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },

  { path: 'topic', component: ProfileComponent },
  { path: 'pictures', component: PicturesComponent },

  { path: 'addTopic', component: AddTopicComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '/login' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
