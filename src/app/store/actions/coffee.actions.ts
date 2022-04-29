import { createAction, props } from '@ngrx/store';
import { CoffeeList } from '../models/coffee.model';

export const LOAD_COFFEE_LIST = '[coffee page] load coffee list';
export const LOAD_COFFEE_SUCCESS = '[coffee page] load coffee list success';
export const LOAD_COFFEE_FAIL = '[coffee page] load coffee list fail';

export const loadCoffeeList = createAction(LOAD_COFFEE_LIST);
export const loadCoffeeSuccess = createAction(
  LOAD_COFFEE_SUCCESS,
  props<{ coffeeList: CoffeeList[] }>()
);
export const loadCoffeeFail = createAction(LOAD_COFFEE_FAIL);
