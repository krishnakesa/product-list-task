import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, of } from 'rxjs';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';
import * as ProductActions from './products.actions';

@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.loadAllProducts),
      mergeMap(() =>
        //Getting 50 products
        this.productService.getProducts(50).pipe(
          map((data) => {
            const products = data.map((product, index) => {
              const currentProduct: Product = {
                ...product,
              };
              currentProduct.index = index + 1;
              return currentProduct;
            });
            return ProductActions.loadAllProductsSuccess({ products });
          })
        )
      )
    )
  );
}
