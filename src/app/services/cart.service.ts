import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartContents: Product[] = [];

  constructor() { }

  // Read
  getCartContents() {
    return this.cartContents;
  }

  // Create
  addToCartContents(product: Product) {
    this.cartContents.push(product);
  }

  // Update

  
  // Delete
}
