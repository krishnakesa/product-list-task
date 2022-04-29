import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { initialState } from 'src/app/app.state';
import { loadCoffeeSuccess } from '../actions/coffee.actions';

const _coffeeReducer = createReducer(
  initialState,
  on(loadCoffeeSuccess, (state, action) => {
    return { ...state, coffeeList: action.coffeeList };
  })
);

export function CoffeeReducer(state: any, action: any) {
  return _coffeeReducer(state, action);
}
