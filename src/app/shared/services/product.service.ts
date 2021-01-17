import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  productList: Product[];

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('../assets/productlist.json');
  }

  getProductById(id: number): Product {
    return this.productList.find((item) => item.id === id);
  }
}
