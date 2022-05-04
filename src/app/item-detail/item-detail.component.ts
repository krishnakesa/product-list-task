import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { getSelectedProduct } from '../state/products.selector';
import * as ProductActions from '../state/products.actions';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
})
export class ItemDetailComponent {
  product$: Observable<Product> = new Observable();

  constructor(private _store: Store) {}

  ngOnInit() {
    //To display the details of the selected product
    this.product$ = this._store.select(getSelectedProduct);
  }

  backToParent() {
    //To navigate back to the table
    this._store.dispatch(ProductActions.backToProductListpage());
  }
}
