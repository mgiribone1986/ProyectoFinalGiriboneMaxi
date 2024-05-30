import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, tap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { ProductActions } from './product.actions';
import { ProductsService } from '../products.service';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ProductEffects {
  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.loadProducts),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.productsService.getProducts().pipe(
          // El servicio responde OK:
          map((data) => ProductActions.loadProductsSuccess({ data })),

          // El servicio responde FAIL:
          catchError((error) =>
            of(ProductActions.loadProductsFailure({ error }))
          )
        )
      )
    );
  });

  createProduct$ = createEffect(() => {
    return this.actions$.pipe(
      // Filtramos la accion:
      ofType(ProductActions.createProduct),
      concatMap((action) =>
        this.productsService.createProduct(action.payload).pipe(
          // El servicio responde OK:
          map((data) => ProductActions.createProductSuccess({ data })),
          // El servicio responde FAIL:
          catchError((error) =>
            of(ProductActions.createProductFailure({ error }))
          )
        )
      )
    );
  });

  deleteProductById$ = createEffect(() => {
    return this.actions$.pipe(
      // Filtramos la accion:
      ofType(ProductActions.deleteProductById),
      concatMap((action) =>
        this.productsService.deleteProductById(action.id).pipe(
          // El servicio responde OK:
          map((data) => ProductActions.deleteProductByIdSuccess({ data })),
          // El servicio responde FAIL:
          catchError((error) =>
            of(ProductActions.deleteProductByIdFailure({ error }))
          )
        )
      )
    );
  });

  onErrors$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(
          ProductActions.loadProductsFailure,
          ProductActions.createProductFailure,
          ProductActions.deleteProductByIdFailure
        ),
        tap((action) => {
          if (action.error instanceof HttpErrorResponse) {
            Swal.fire({
              icon: 'error',
              text: action.error['message'],
            });
          }
        })
      );
    },
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) {}
}
