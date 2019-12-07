import { Component } from '@angular/core';
import { AuthenticateService } from '../app/authenticate.service';
import { User } from './models/user.model';
import { Router } from '@angular/router';


@Component({ selector: 'app-root', templateUrl: 'app.component.html' })
export class AppComponent {
  currentUser: User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticateService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
