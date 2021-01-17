import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '../model/cartItem.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  cart: CartItem[] = [];

  addToCart(item: CartItem): void {
    item.id = this.cart.length;
    this.cart.push(item);
  }

  increaseQty(id: number): void {
    const index = this.cart.findIndex((item) => item.id === id);
    this.cart[index].quantity++;
  }

  decreaseQty(id: number): void {
    const index = this.cart.findIndex((item) => item.id === id);
    if (this.cart[index].quantity) {
      this.cart[index].quantity--;
    }
  }

  removeFromCart(id: number): void {
    const index = this.cart.findIndex((item) => item.id === id);
    this.cart.splice(index);
  }

  getCartItems(): CartItem[] {
    return this.cart;
  }

  getTotalPrice(): Observable<number> {
    let total = 0;
    this.cart.forEach((item) => {
      const effectivePrice =
        item.product.price -
        0.01 * item.product.discountPercent * item.product.price;
      total = total + item.quantity * effectivePrice;
    });
    return new Observable((obs) => obs.next(total));
  }
}
