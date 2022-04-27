import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductItemModel } from '../models/product-item.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
})
export class ItemDetailComponent implements OnDestroy {
  @Input() product: ProductItemModel = new ProductItemModel({});

  private _sub: Subscription = new Subscription();

  constructor(private activatedRoute: ActivatedRoute, private _productService: ProductService) { }

  ngOnInit() {
    this._sub = this.activatedRoute.queryParams.subscribe(params => {
      const blendName = params['blendName'];
      this.product = this._productService.getProductDetails(blendName);
      console.log(blendName)
    });
  }


  ngOnDestroy(): void {
    this._sub.unsubscribe();
  }
}
