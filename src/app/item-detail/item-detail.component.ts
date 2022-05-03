import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { getSelectedProduct } from '../state/products.reducer';
import * as ProductActions from '../state/products.actions';

@Component({
    selector: 'app-item-detail',
    templateUrl: './item-detail.component.html',
    styleUrls: ['./item-detail.component.css'],
})
export class ItemDetailComponent {
    product$: Observable<Product> = new Observable();

    constructor(private _store: Store) { }

    ngOnInit() {
        this.product$ = this._store.select(getSelectedProduct);
    }

    backToParent() {
        this._store.dispatch(ProductActions.backToProductListpage());
    }
}
