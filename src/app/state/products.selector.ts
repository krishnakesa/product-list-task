import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './product.state';

//Whenever products in the state change, FeatureSelector sends the new product list to the subscribers
const getProductsState = createFeatureSelector<ProductState>('products');

export const getCurrentPageProducts = createSelector(
  //Gets all the properties in the State and returns only current page products to Product List Home
  getProductsState,
  (state: any) => {
    return state.currentPageProducts;
  }
);

export const getCurrentPageNumber = createSelector(
  //Gets all the properties in the State and returns only current page number to Product List Home
  getProductsState,
  (state: any) => {
    return state.currentPageNumber;
  }
);

export const getSelectedProduct = createSelector(
  //Gets all the properties in the State and returns only selected products to Product List Home
  getProductsState,
  (state: any) => {
    return state.selectedProduct;
  }
);
export const getSelectedProductId = createSelector(
  //Gets all the properties in the State and returns selected product and selected product Id to Product List
  getSelectedProduct,
  (selectedProduct: any) => {
    return selectedProduct && selectedProduct.id;
  }
);
