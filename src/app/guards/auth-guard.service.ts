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
    return this.authService.isAuthenticated().then(isAuth => {
      if (!isAuth) {
        return this.router.navigate(['admin/login']);
      } else if (isAuth) {
        return true;
      }
    });
  }
}
