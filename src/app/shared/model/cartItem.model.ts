import { Product } from './product.model';

export interface CartItem {
  id: number;
  product: Product;
  quantity: number;
  isSaved: boolean;
}
