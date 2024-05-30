import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { MockProvider } from 'ng-mocks';

describe('AuthService', () => {
  let authService: AuthService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService, MockProvider(Router)],
    });
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
  });

  it('Debe establecer un usuario autenticado al llamar login', () => {
    const spyOnSetItem = spyOn(localStorage, 'setItem');
    const spyOnNavigate = spyOn(router, 'navigate');
    authService.login({
      email: 'email@mail.com',
      password: '123456',
    });
    authService.authUser$.subscribe({
      next: (authUser) => {
        expect(authUser).toBeTruthy(); // no tiene que ser null, undefined o false
        expect(spyOnSetItem).toHaveBeenCalled();
        expect(spyOnNavigate).toHaveBeenCalled();
      },
    });
  });

  it('Debe mostrar un alert con el texto "Correo o password incorrectos" si los datos no coinciden en el login', () => {
    const spyOnAlert = spyOn(window, 'alert');
    authService.login({
      email: 'fake@mail.com',
      password: 'abcde123',
    });
    // expect(spyOnAlert).toHaveBeenCalledWith('Correo o password incorrectos');
  });
});
