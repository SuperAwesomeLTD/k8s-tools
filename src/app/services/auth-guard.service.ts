import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(): boolean {
    console.log(this.authService.isLoggedIn());
    if (this.authService.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
