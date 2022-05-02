import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

export const PRODUCT_LIST_API_HOST: InjectionToken<string> =
  new InjectionToken<string>('product-list-api-host');
@Injectable()
export class ProductService {
  constructor(
    private _http: HttpClient,
    @Inject(PRODUCT_LIST_API_HOST) private _productListHost: string
  ) {}

  getProducts(size: number = 1): Observable<Product[]> {
    //Getting Http Response from the given api in the form of Observable
    return this._http.get<Product[]>(`${this._productListHost}?size=${size}`);
  }
}
