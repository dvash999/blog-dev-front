import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<any> | boolean {
    try {
      return this.authService.isAuthenticated().then(isAuth => {
        console.log('hi', isAuth)
          if (!isAuth) {
            this.router.navigate(['admin/login']);
            return false;
          } else if (isAuth) {
            return true;
          }
      });
    } catch (err) {
      throw err;
    }

  }
}
