import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor( private auth: AuthService){}

  canActivate(
    route: ActivatedRouteSnapshot): boolean {
    if(this.auth.isLoggedIn){
      return true
    }
    return false;
  }
  
}
