import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartserviceService } from '../cart-data'; // ✅ must match exported class name

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css']
})
export class CartComponent {
  cartItems: any[] = [];

  constructor(private cartService: CartserviceService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }

  removeItem(id: number) {
    this.cartService.removeFromCart(id);
    this.cartItems = this.cartService.getCartItems();
  }
}
