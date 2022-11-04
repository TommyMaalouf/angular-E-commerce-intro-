import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];

  constructor(private httpClient: HttpClient) {}

  addToCart(product: Product): Product[] {
    this.items.push(product);

    return this.items;
  }

  clearCart(): Product[] {
    this.items = [];

    return this.items;
  }

  getItems(): Product[] {
    return this.items;
  }

  getShippingPrices() {
    return this.httpClient.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }
}
