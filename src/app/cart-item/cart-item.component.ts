import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from '../shared/model/cartItem.model';
import { CartService } from '../shared/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input() item: CartItem;
  @Output() quantityUpdated: EventEmitter<boolean> = new EventEmitter();
  finalPrice: number;
  isQauntityGreaterthanOne: boolean = true;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.finalPrice =
      this.item.product.price -
      0.01 * this.item.product.discountPercent * this.item.product.price;
  }

  incQty(): void {
    this.cartService.increaseQty(this.item.id);
    this.quantityUpdated.emit(true);
    this.isQauntityGreaterthanOne = true;
  }

  decQty(): void {
    this.cartService.decreaseQty(this.item.id);
    if (this.item.quantity > 1) {
      this.isQauntityGreaterthanOne = false;
    } else {
      this.isQauntityGreaterthanOne = true;
    }
    this.quantityUpdated.emit(true);
  }

  moveToSave(): void {}

  remove(): void {}
}
