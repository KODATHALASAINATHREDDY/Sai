import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartserviceService } from '../cart-data';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent {
  products = [
    { id: 1, name: 'Laptop', price: 55000 },
    { id: 2, name: 'Smartphone', price: 25000 },
    { id: 3, name: 'Headphones', price: 2500 },
    { id: 4, name: 'Smartwatch', price: 7000 }
  ];

  constructor(private cartService: CartserviceService) {}

  addToCart(product: any) {
    this.cartService.addToCart(product);
    alert(`${product.name} added to cart!`);
  }
}
