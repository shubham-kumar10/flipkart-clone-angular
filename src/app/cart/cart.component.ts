import { Component, OnChanges, OnInit } from '@angular/core';
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
  total: number;
  totalDiscount: number;
  ngOnInit(): void {
    this.cart = this.cartService.getCartItems();
    this.updateTotal();
  }

  updateTotal(): void {
    this.cartService.getTotalPrice().subscribe((total) => {
      this.total = total;
    });
  }
}
