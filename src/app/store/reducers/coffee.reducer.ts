import { createReducer } from '@ngrx/store';
import { initialState } from 'src/app/app.state';

const _coffeeReducer = createReducer(initialState);

export function CoffeeReducer(state: any, action: any) {
  return _coffeeReducer(state, action);
}
