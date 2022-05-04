import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  @Input() pageSize: number = 10;
  @Input() currentPage: number = 1;
  @Input() activeProduct: Product = {
    index: 0,
    id: 0,
    uid: '',
    blend_name: '',
    origin: '',
    variety: '',
    notes: '',
    intensifier: '',
  };

  @Output() rowItemClicked: EventEmitter<Product> = new EventEmitter();

  rowClicked(product: Product): void {
    this.rowItemClicked.emit(product);
    this.activeProduct = product;
  }

  isActive(product: Product): boolean {
    //To give background color black to the selected row
    if (this.activeProduct.blend_name) {
      return this.activeProduct.blend_name === product.blend_name;
    }
    return false;
  }
}
