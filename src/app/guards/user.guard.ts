import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let token = localStorage.getItem('token');
    if (token) {
      const helper = new JwtHelperService();
      let decodToken = helper.decodeToken(token);
      if (decodToken.roleUser == 'user')
        return true;
      else {
        this.router.navigate(['/']);
        return false;
      }

    }
    else {
      this.router.navigate(['/']);
      return false;
    }
  }

}
