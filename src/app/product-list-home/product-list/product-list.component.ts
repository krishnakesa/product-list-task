import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { getSelectedProduct, getSelectedProductId } from 'src/app/state/products.reducer';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {




  @Input() products: Product[] = [];
  @Input() pageSize: number = 10;
  @Input() currentPage: number = 1;

  activeProductId$: Observable<number> = new Observable();

  @Output() rowItemClicked: EventEmitter<Product> = new EventEmitter();

  constructor(private _store: Store) { }

  ngOnInit(): void {
    this.activeProductId$ = this._store.select(getSelectedProductId);
  }
  rowClicked(product: Product): void {
    this.rowItemClicked.emit(product);
  }

  isActive(product: Product): boolean {
    /* if (this.activeProduct.blend_name) {
      return this.activeProduct.blend_name === product.blend_name;
    } */
    return false;
  }
}
