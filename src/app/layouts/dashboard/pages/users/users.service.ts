import { Injectable } from '@angular/core';
import { CreateUserPayload, IUser } from './models';
import { catchError, delay, first, Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment} from '../../../../../environments/environment';

const USERS_DB: IUser[] = [
   {
        id: 1,
        firstName: 'Leo',
        lastName: 'Matioli',
        email: 'dead999@yahoo.com',
        sanciones: 3,
        role: 'ADMIN',
        createdAt: new Date(),
      },
      {
        id: 2,
        firstName: 'Roberto',
        lastName: 'Carlos',
        email: '1000000@friends.com',
        sanciones: 3,
        role: 'USER',
        createdAt: new Date(),
      },
      {
        id: 3,
        firstName: 'Marcos',
        lastName: 'Sogtulakk',
        email: 'sanitarios@acidos.com',
        sanciones: 4,
        role: 'USER',
        createdAt: new Date(),
      },
      {
        id: 4,
        firstName: 'Mica',
        lastName: 'Kitah',
        email: 'micayosoy@instagramer.com',
        sanciones: 5,
        role: 'ESTUDIANTE',
        createdAt: new Date(),
      },
      {
        id: 5,
        firstName: 'Dina',
        lastName: 'Marca',
        email: 'filosofiayletras@dana.dk',
        sanciones: 5,
        role: 'PROFESOR',
        createdAt: new Date(),
      },
];

@Injectable({ providedIn: 'root' })
export class UsersService {

  constructor(private httpClient: HttpClient){

  }
  getUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>('http://localhost:3000/users')
    //return of(USERS_DB).pipe(delay(1500));
    // return throwError(() => new Error('Error al cargar los usuarios')).pipe(
    //   catchError((err) => of(err))
    // );
  }

  getUserById(id: number): Observable<IUser | undefined> {
    return this.httpClient.get<IUser>(`http://localhost:3000/users/${id}`); 

    //return of(USERS_DB.find((el) => el.id === id)).pipe(delay(1500));
  }
  createUser(payload: CreateUserPayload): Observable<IUser>{
    return this.httpClient.post<IUser>(`${environment.baseAPIURL}/users`, payload);
  }

}

