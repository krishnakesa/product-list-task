import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductItemModel } from './models/product-item.model';
import { ProductService } from './services/product.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  private products: ProductItemModel[] = [];
  pageSize: number = 10;
  totalItems: number = 50;
  currentPage: number = 1;
  displayItems: ProductItemModel[] = [];
  pageNumbers: number[] = [1, 2, 3, 4, 5];
  currentProduct: ProductItemModel = new ProductItemModel({});
  constructor(private _productService: ProductService, private _router: Router) { }


  ngOnInit() {
    //Subscribed to the getProducts Observable
    this._productService
      .getProducts(this.totalItems)
      .subscribe((products: ProductItemModel[]) => {
        this.products = products;
        this._productService.allProducts = products;
        this.getItems(1);
      });
  }

  getNext(): void {
    //To disable the next button when the user is on the 5th page.
    if (this.currentPage < 5) {
      this.currentPage += 1;
      this.getItems(this.currentPage, true);
    }
  }

  getPrevious(): void {
    //To disable the previous button when the user is on the 1st page.
    if (this.currentPage > 1) {
      this.currentPage -= 1;
      this.getItems(this.currentPage, true);
    }
  }

  getItems(currentPage: number, showDetails: boolean = false): void {
    //Slices the list of products to 10 per page.
    this.displayItems = this.products.slice(
      (currentPage - 1) * this.pageSize,
      currentPage * this.pageSize
    );
    this.currentPage = currentPage;
    this.currentProduct = {};
    if (showDetails) {
      this.currentProduct = this.displayItems[0];
      this._router.navigateByUrl(`/details?blendName=${this.currentProduct.blend_name}`);
    }

  }

  rowItemClicked(product: ProductItemModel): void {
    this.currentProduct = product;
    this._router.navigateByUrl(`/details?blendName=${product.blend_name}`);
  }
}
