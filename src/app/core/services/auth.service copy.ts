import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from '../../layouts/dashboard/pages/users/models';
import { LoginData} from '../../layouts/auth/models';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService{
  private _authUser$ = new BehaviorSubject<IUser | null>(null);
  public authUser$ = this._authUser$.asObservable();

  login(data: LoginData): void {
    if (data.email !=="email@mail.com" || data.password !== '123456'){
      alert('correo o password incorrectos')
    }else {
      this._authUser$.next({
        id: 1,
        createdAt: new Date(),
        email: 'email@mail.com',
        firstName: 'Maxi',
        lastName: 'Giribone',
        sanciones: 99,
        role: 'ADMIN',
    });
  }
}

  logout(): void {
    this._authUser$.next(null);
  }
}

