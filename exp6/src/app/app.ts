import { Component } from '@angular/core';
import { ProductListComponent } from './product-list/product-list';
import { CartComponent } from './cart/cart';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent, CartComponent, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'exp6';
}
