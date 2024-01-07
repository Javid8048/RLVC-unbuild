import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean | UrlTree {
    // Navigate to the login page with extras
    try {
      let data = sessionStorage.getItem("userName");
      if (data == undefined) {
        this.router.navigate([""])
        throw new Error("not login")
      } else {
        return true;
      }
    } catch (e) {
      this.router.navigate([""])
      return false;
    }
  }
}
