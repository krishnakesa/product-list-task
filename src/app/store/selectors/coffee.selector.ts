import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/app.state';

export const COFFEE_LIST_NAME = 'coffee';

const getCoffeState = createFeatureSelector<AppState>(COFFEE_LIST_NAME);

export const getCoffeList = createSelector(getCoffeState, (state) => {
  return state.coffeeList;
});
