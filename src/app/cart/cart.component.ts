import { Component, OnInit } from '@angular/core';
import { CartItem } from '../shared/model/cartItem.model';
import { CartService } from '../shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService) {}

  cart: CartItem[];
  ngOnInit(): void {
    this.cart = this.cartService.getCartItems();
  }
}
