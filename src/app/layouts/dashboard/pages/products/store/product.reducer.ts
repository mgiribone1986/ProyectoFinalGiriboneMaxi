import { createFeature, createReducer, on } from '@ngrx/store';
import { ProductActions } from './product.actions';
import { IProduct } from '../models';

export const productFeatureKey = 'product';

export interface State {
  products: IProduct[];
  isLoading: boolean;
  error: unknown;
}

export const initialState: State = {
  products: [],
  isLoading: false,
  error: null,
};

export const reducer = createReducer(
  initialState,

  // Accion cargar productos...
  on(ProductActions.loadProducts, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),

  // Los productos se cargaron sin errores...
  on(ProductActions.loadProductsSuccess, (state, action) => {
    return {
      ...state,
      isLoading: false,
      products: action.data,
    };
  }),

  // Los productos se cargaron con algun error
  on(ProductActions.loadProductsFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
      isLoading: false,
    };
  }),

  on(ProductActions.createProduct, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),

  on(ProductActions.createProductSuccess, (state, action) => {
    return {
      ...state,
      isLoading: false,
      products: [...state.products, action.data],
    };
  }),
  on(ProductActions.createProductFailure, (state, action) => {
    return {
      ...state,
      isLoading: false,
      error: action.error,
    };
  }),

  on(ProductActions.deleteProductById, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(ProductActions.deleteProductByIdSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    products: state.products.filter((el) => el.id !== action.data.id),
  })),
  on(ProductActions.deleteProductByIdFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  }))
);

export const productFeature = createFeature({
  name: productFeatureKey,
  reducer,
});
