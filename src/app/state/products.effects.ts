import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, mergeMap, of } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import * as ProductActions from './products.actions';

@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductService,
    private _store: Store
  ) {}

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.loadAllProducts),
      mergeMap(() =>
        this.productService.getProducts(50).pipe(
          map((data) => {
            const products = data.map((product, index) => {
              const currentProduct = new Product(product);
              currentProduct.index = index + 1;
              return currentProduct;
            });
            this._store.dispatch(
              ProductActions.loadAllProductsSuccess({ products })
            );
            return ProductActions.loadAllProductsSuccess({ products });
          })
        )
      )
    )
  );

  loadCurrentPage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.loadAllProductsSuccess),
      mergeMap(() => {
        return of(ProductActions.loadCurrentPageProducts());
      })
    )
  );
}
