import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';
import { getSelectedProductId } from '../../state/products.selector';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[] = [];
  @Input() pageSize: number = 10;

  activeProductId$: Observable<number> = new Observable();

  @Output() rowItemClicked: EventEmitter<Product> = new EventEmitter();

  constructor(private _store: Store) {}

  ngOnInit(): void {
    //Get the selected product Id in the table
    this.activeProductId$ = this._store.select(getSelectedProductId);
  }
  rowClicked(product: Product): void {
    //Emit event when a row is clicked
    this.rowItemClicked.emit(product);
  }
}
