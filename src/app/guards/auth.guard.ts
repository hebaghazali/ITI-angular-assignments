import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
  NavigationCancel,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from './../Services/user-auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authServ: UserAuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.authServ.isLogged) {
      return true;
    } else {
      alert('You must log in first!');
      this.router.events.subscribe((val: any) => {
        if (val instanceof NavigationCancel) {
          localStorage.setItem('routeURL', val.url);
        }
        // localStorage.setItem('routeURL', state.url);
      });
      this.router.navigate(['/login']);

      return false;
    }
  }
}
