import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ProductItemModel } from '../models/product-item.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  @Input() products: ProductItemModel[] = [];
  @Input() pageSize: number = 10;
  @Input() currentPage: number = 1;
  @Input() activeProduct: ProductItemModel = new ProductItemModel({});

  @Output() rowItemClicked: EventEmitter<ProductItemModel> = new EventEmitter();

  rowClicked(product: ProductItemModel): void {
    this.rowItemClicked.emit(product);
    this.activeProduct = product;
  }

  isActive(product: ProductItemModel): boolean {
    if (this.activeProduct.blend_name) {
      return this.activeProduct.blend_name === product.blend_name;
    }
    return false;
  }
}
