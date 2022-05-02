import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as ProductActions from './state/products.actions'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(private _store: Store) {
    this._store.dispatch(ProductActions.loadAllProducts());

  }

}
