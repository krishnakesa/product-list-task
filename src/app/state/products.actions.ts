import { createAction, props } from '@ngrx/store';
import { Product } from '../models/product.model';


export const loadAllProducts = createAction(
  '[Product List] Load All Products'
);

export const loadAllProductsSuccess = createAction(
  '[Product List] Load All Products Success',
  props<{ products: Product[] }>()
);

export const loadAllProductsError = createAction(
  '[Product List] Load All Products Error'
);

export const loadCurrentPageProducts = createAction(
  '[Product List] Get Current Page Products'
);

export const setCurrentPage = createAction(
  '[Product List] Set Current Page',
  props<{ pageNumber: number }>()
);

export const productSelected = createAction(
  '[Product List] Product Selected',
  props<{ product: Product }>()
);

export const loadNextProductListPage = createAction(
  '[Product List] Load Next Product List Page'
);

export const loadPreviousProductListPage = createAction(
  '[Product List] Load Previous Product List Page'
);

export const backToProductListpage = createAction(
  '[Product Details] Back to Product List'
);