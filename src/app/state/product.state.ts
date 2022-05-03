import { Product } from '../models/product.model';

export interface ProductState {
  products: Product[];
  currentPageNumber: number;
  currentPageProducts: Product[];
  selectedProduct: Product | null;
  pageSize: number;
  totalPages: number;
  totalProducts: number;
}
