import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  BehaviorSubject,
  delay,
  filter,
  first,
  forkJoin,
  map,
  Observable,
  of,
  skip,
  Subject,
  Subscription,
  take,
  takeUntil,
  tap,
} from 'rxjs';
import { IUser } from '../users/models';

@Component({
  selector: 'app-clase-10-rxjs-2',
  templateUrl: './clase-10-rxjs-2.component.html',
  styleUrl: './clase-10-rxjs-2.component.scss',
})
export class Clase10Rxjs2Component implements OnInit, OnDestroy {
  cambioElUsuario$ = new Subject<boolean>();

  componenteDestruido$ = new Subject<boolean>();
  componenteDestruidoBehavior$ = new BehaviorSubject([]);

  usuarioAutenticado$ = new BehaviorSubject<IUser | null>(null);

  obtenerUsuarioSubscription?: Subscription;

  usuarios: IUser[] = [];
  roles: string[] = [];

  cargando = false;

  getRoles(): Observable<string[]> {
    return of(['ADMIN', 'USER', 'ESTUDIANTE', 'PROFESOR']).pipe(delay(1500));
  }

  getUsers(): Observable<IUser[]> {
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
    return of(USERS_DB).pipe(delay(3000));
  }

  login(): void {
    this.cambioElUsuario$.next(true);
  }

  ngOnDestroy(): void {
    console.log('El componente se destruyo');
    this.componenteDestruido$.next(true);

    this.obtenerUsuarioSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.cargando = true;
    forkJoin([this.getUsers(), this.getRoles()]).subscribe({
      next: (value) => {
        this.usuarios = value[0];
        this.roles = value[1];
      },
      complete: () => {
        this.cargando = false;
      },
    });

    // forkJoin([of('hola'), of(1), of(true)]).subscribe({
    //   next: (value) => {
    //     console.log(value);
    //   },
    // });

    const obtenerUsuario$ = new Observable<number>((observer) => {
      let counter = 0;
      setInterval(() => {
        counter++;
        observer.next(counter);
      }, 1000);
    });

    // this.obtenerUsuarioSubscription = obtenerUsuario$
    //   // .pipe(takeUntil(this.componenteDestruido$))
    //   .subscribe({
    //     next: (v) => console.log(v),
    //   });

    this.cambioElUsuario$.subscribe({
      next: (value) => {
        this.usuarioAutenticado$.next({
          id: 1,
          createdAt: new Date(),
          email: 'email@mail.com',
          firstName: 'Maxi',
          lastName: 'Giribone',
          sanciones: 99,
          role: 'ADMIN',
        });
      },
    });

    this.usuarioAutenticado$.subscribe({
      next: (value) => {
        console.log(value);
      },
    });

    // const obtenerUsuarioSubscription = obtenerUsuario$
    //   .pipe(
    //     tap((value) => {
    //       console.log('TAP 1', value);
    //     }),
    //     map((value) => {
    //       return value * 2;
    //     }),
    //     filter((value) => {
    //       return value > 5;
    //     }),
    //     tap((value) => {
    //       console.log('TAP 2', value);
    //     })
    //   )
    //   .subscribe({
    //     next: (value) => {
    //       console.log(value);
    //     },
    //     error: () => {},
    //     // finally
    //     complete: () => {
    //       console.log(
    //         'El observable se completo, por lo tanto no emite mas valores'
    //       );
    //     },
    //   });
  }
}
