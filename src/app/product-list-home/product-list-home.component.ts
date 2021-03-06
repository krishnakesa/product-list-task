import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { APP_CONSTANTS } from '../app.constants';
import { Product } from '../models/product.model';
import * as ProductActions from '../state/products.actions';
import {
  getCurrentPageNumber,
  getCurrentPageProducts,
  getSelectedProduct,
} from '../state/products.selector';

@Component({
  selector: 'app-product-list-home',
  templateUrl: './product-list-home.component.html',
  styleUrls: ['./product-list-home.component.css'],
})
export class ProductListHomeComponent implements OnInit {
  pageSize: number = APP_CONSTANTS.PAGE_SIZE;
  totalItems: number = 50;
  currentPage$: Observable<number> = new Observable();
  displayItems$: Observable<Product[]> = new Observable();
  pageNumbers: number[] = [1, 2, 3, 4, 5];

  currentProduct$: Observable<Product> = new Observable();

  products$: Observable<Product[]> = new Observable();
  constructor(private _router: Router, private _store: Store) {}

  ngOnInit() {
    this.displayItems$ = this._store.select(getCurrentPageProducts);
    this.currentPage$ = this._store.select(getCurrentPageNumber);
    this.currentProduct$ = this._store.select(getSelectedProduct);
  }

  getNext(): void {
    //Dispatches action
    this._store.dispatch(ProductActions.loadNextProductListPage());
  }

  getPrevious(): void {
    //Dispatches action
    this._store.dispatch(ProductActions.loadPreviousProductListPage());
  }

  getItems(currentPage: number): void {
    //Dispatches action
    this._store.dispatch(
      ProductActions.setCurrentPage({ pageNumber: currentPage })
    );
  }

  rowItemClicked(product: Product): void {
    //Dispatches action
    this._store.dispatch(ProductActions.productSelected({ product: product }));
    this._router.navigateByUrl(`/details`);
  }
}
