import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
  private cart: any[] = [];

  addToCart(product: any) {
    this.cart.push(product);
  }

  removeFromCart(id: number) {
    this.cart = this.cart.filter(item => item.id !== id);
  }

  getCartItems() {
    return this.cart;
  }

  clearCart() {
    this.cart = [];
  }
}
