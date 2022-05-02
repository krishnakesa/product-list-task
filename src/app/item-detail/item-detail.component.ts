import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription, Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';
import { getSelectedProduct } from '../state/products.reducer';
import * as ProductActions from '../state/products.actions';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
})
export class ItemDetailComponent {


  product$: Observable<Product> = new Observable()


  constructor(private _store: Store) { }

  ngOnInit() {

    this.product$ = this._store.select(getSelectedProduct)

  }

  backToParent() {
    this._store.dispatch(ProductActions.backToProductListpage())
  }


}
