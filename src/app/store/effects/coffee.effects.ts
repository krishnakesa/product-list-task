import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { loadCoffeeList, loadCoffeeSuccess } from '../actions/coffee.actions';
import { CoffeeList, CoffeeListClass } from '../models/coffee.model';

@Injectable()
export class CoffeeEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}

  getCoffeeList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadCoffeeList),
      mergeMap((action) => {
        return this.productService.getProducts(50).pipe(
          map((data) => {
            let coffeeList = data.map((coffee) => {
              return new CoffeeListClass(coffee);
            });
            return loadCoffeeSuccess({ coffeeList: coffeeList });
          })
        );
      })
    );
  });
}
