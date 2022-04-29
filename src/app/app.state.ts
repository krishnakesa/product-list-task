import { CoffeeList } from './store/models/coffee.model';

export interface AppState {
  //readonly coffeeList: CoffeeList[];
  coffeeList: CoffeeList[];
}

export interface CoffeeState {}

export const initialState: CoffeeState = {
  coffeeList: [],
};
