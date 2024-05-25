import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
//import { map, Observable, of } from 'rxjs';
import { map } from 'rxjs';

export const authGuard:CanActivateFn = (route, state) => {
  console.log('authGuard');

  const router = inject(Router);
  const authService = inject(AuthService);
  const isAuth = authService.verifyToken();
  return isAuth || router.createUrlTree(['auth']);
 // return router.createUrlTree(['auth'])

//  return authService.authUser$.pipe(
  //map((authUser) => {
    //if (!authUser) {
    //return router.createUrlTree(['auth']);
    //}
    //return true;
     // map((authUser) => (!authUser ? router.createUrlTree(['auth']) : true)) FORMA  CORTA
  //})
   //);
};

