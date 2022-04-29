import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProductItemModel } from '../models/product-item.model';
import { CoffeeList } from '../store/models/coffee.model';

@Injectable()
export class ProductService {
  constructor(private _http: HttpClient) {}

  public allProducts: ProductItemModel[] = [];

  getProducts(size: number = 1): Observable<CoffeeList[]> {
    //Getting Http Response from the given api in the form of Observable
    return this._http.get<CoffeeList[]>(
      `https://random-data-api.com/api/coffee/random_coffee?size=${size}`
    );
  }

  getProductDetails(blendName: string): ProductItemModel {
    return (
      this.allProducts.find(({ blend_name }) => blend_name === blendName) || {}
    );
  }
}
