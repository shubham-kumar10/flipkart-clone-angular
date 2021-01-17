import { Injectable } from '@angular/core';
import { CartItem } from '../model/cartItem.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  cart: CartItem[] = [];

  addToCart(item: CartItem): void {
    this.cart.push(item);
  }

  removeFromCart(item: CartItem): void {
    //TODO find by id and splice
    this.cart.splice(0);
  }

  getCartItems(): CartItem[] {
    return this.cart;
  }
}
