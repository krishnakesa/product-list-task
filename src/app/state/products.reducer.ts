import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { ProductState } from './product.state';
import * as ProductActions from './products.actions';

const initialState: ProductState = {
  products: [],
  currentPageNumber: 1,
  currentPageProducts: [],
  selectedProduct: null,
  pageSize: 10,
  totalPages: 5,
  totalProducts: 50,
};

export const productReducer = createReducer<ProductState>(
  initialState,
  on(ProductActions.loadAllProductsSuccess, (state, action) => {
    const currentPageNumber = state.currentPageNumber;
    const currentPageProducts = action.products.slice(
      (currentPageNumber - 1) * state.pageSize,
      currentPageNumber * state.pageSize
    );
    return {
      ...state,
      products: action.products,
      currentPageProducts: currentPageProducts,
    };
  }),
  on(ProductActions.setCurrentPage, (state, action) => {
    const currentPageNumber = action.pageNumber;
    const currentPageProducts = state.products.slice(
      (currentPageNumber - 1) * state.pageSize,
      currentPageNumber * state.pageSize
    );
    return {
      ...state,
      currentPageProducts: currentPageProducts,
      currentPageNumber: currentPageNumber,
    };
  }),
  on(ProductActions.loadNextProductListPage, (state) => {
    const currentPageNumber = state.currentPageNumber + 1;
    const currentPageProducts = state.products.slice(
      (currentPageNumber - 1) * state.pageSize,
      currentPageNumber * state.pageSize
    );
    return {
      ...state,
      currentPageNumber: currentPageNumber,
      currentPageProducts: currentPageProducts,
    };
  }),
  on(ProductActions.loadPreviousProductListPage, (state) => {
    const currentPageNumber = state.currentPageNumber - 1;
    const currentPageProducts = state.products.slice(
      (currentPageNumber - 1) * state.pageSize,
      currentPageNumber * state.pageSize
    );
    return {
      ...state,
      currentPageNumber: currentPageNumber,
      currentPageProducts: currentPageProducts,
    };
  }),
  on(ProductActions.productSelected, (state, action) => {
    return {
      ...state,
      selectedProduct: action.product,
    };
  }),
  on(ProductActions.backToProductListpage, (state) => {
    return {
      ...state,
    };
  })
);
