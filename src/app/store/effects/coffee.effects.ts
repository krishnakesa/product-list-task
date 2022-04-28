import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { exhaustMap, map } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { loadCoffeeList, loadCoffeeSuccess } from '../actions/coffee.actions';

@Injectable()
export class CoffeeEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}

  getCoffeeList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadCoffeeList),
      exhaustMap((action) => {
        return this.productService.getProducts(50).pipe(
          map((data) => {
            return loadCoffeeSuccess();
          })
        );
      })
    );
  });
}
