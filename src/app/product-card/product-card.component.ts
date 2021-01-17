import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../shared/model/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() productDetails: Product;
  finalPrice: number;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.finalPrice = this.productDetails.price -
      (0.01 * this.productDetails.discountPercent * this.productDetails.price);
  }

  productCardClicked(): void {
    this.router.navigate(['product'], { queryParams: { id: this.productDetails.id } });
  }
}
