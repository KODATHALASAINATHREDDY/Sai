import { TestBed } from '@angular/core/testing';
import { CartserviceService } from './cartservice'; // correct service import

describe('CartserviceService', () => {
  let service: CartserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartserviceService); // inject the service
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add item to cart', () => {
    const product = { id: 1, name: 'Laptop', price: 50000 };
    service.addToCart(product);
    expect(service.getCartItems().length).toBe(1);
    expect(service.getCartItems()[0].name).toBe('Laptop');
  });

  it('should remove item from cart', () => {
    const product = { id: 1, name: 'Laptop', price: 50000 };
    service.addToCart(product);
    service.removeFromCart(1);
    expect(service.getCartItems().length).toBe(0);
  });
});
