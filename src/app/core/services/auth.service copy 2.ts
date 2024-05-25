import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from '../../layouts/dashboard/pages/users/models';
import { LoginData } from '../../layouts/auth/models';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private MOCK_AUTH_USER: IUser = {
    id: 1,
    createdAt: new Date(),
    email: 'email@mail.com',
    firstName: 'Maxi',
    lastName: 'Giribone',
    sanciones: 99,
    role: 'ADMIN',
  };

  private _authUser$ = new BehaviorSubject<IUser | null>(null);
  public authUser$ = this._authUser$.asObservable();

  constructor(private router: Router) {}

  login(data: LoginData): void {
    if (data.email !== 'email@mail.com' || data.password !== '123456') {
      alert('Correo o password incorrectos');
    } else {
      this._authUser$.next(this.MOCK_AUTH_USER);
      localStorage.setItem(
        'accessToken',
        'fdskfdsjkmngfunudsijfdsioufjsdoifdsyhfds'
      );
      this.router.navigate(['dashboard', 'home']);
    }
  }

  //verifyToken(): boolean {
    //const token = localStorage.getItem('accessToken');
    //if (token) {
     // this._authUser$.next(this.MOCK_AUTH_USER);
     // return true;
    //} else {
    //  return false;
    //}
  //}

  verifyToken(): boolean { //Observable<boolean> 
     const token = localStorage.getItem('accessToken');

     if(token){
      this._authUser$.next(this.MOCK_AUTH_USER);
      return  true
     } else {
      return false
     }
    
    }

  logout(): void {
    this._authUser$.next(null);
    localStorage.removeItem('accessToken');
  }
}
