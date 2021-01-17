import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartItem } from '../shared/model/cartItem.model';
import { Product } from '../shared/model/product.model';
import { CartService } from '../shared/services/cart.service';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  id: number;
  productDetails: Product;

  ngOnInit(): void {
    this.id = +this.route.snapshot.queryParamMap.get('id');
    this.productDetails = this.productService.getProductById(this.id);
  }

  addToCart(): void {
    const item: CartItem = {
      product: this.productDetails,
      quantity: 1,
      isSaved: false,
    };
    this.cartService.addToCart(item);
    this.router.navigate(['cart']);
  }
}
