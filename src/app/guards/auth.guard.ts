import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
// the template for this component is modified from the example project in 
// https://gitlab.com/sumodevelopment/angular-movies-demo-java-2022/-/blob/main/src/app/guards/auth.guard.ts
export class AuthGuard implements CanActivate {

  constructor(
    private userService: UserService,
    private router: Router
  ) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // if user state is not an empty object user is logged in
    if (Object.keys(this.userService.user).length !== 0) {
      return true;
    }
    // user not logged in
    else {
      // redirect to default page, login screen
      this.router.navigateByUrl("/");
      return false;
    }

  }
  
}
