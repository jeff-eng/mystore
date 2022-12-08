import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { CartItem } from '../models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartContents: CartItem[] = [];
  private _cartTotal: number;

  get cartTotal() {
    return this._cartTotal;
  }

  set cartTotal(sum: number) {
    this._cartTotal = sum;
  }

  constructor() { 
    this._cartTotal = 0;
  }

  getCartContents() {
    return this.cartContents;
  }

  addToCartContents(product: Product | undefined, quantity: number): CartItem[] {
    // Check if item is already in the cart (findIndex returns (-1) if item not found)
    const itemIndex = this.cartContents.findIndex((cartItem) => {
      return cartItem.product?.id === product?.id;
    });
    
    if (itemIndex >= 0) {
      this.cartContents[itemIndex].quantity += quantity;
    } else {
      const item: CartItem = {
        quantity: quantity,
        product: product
      } 

      this.cartContents.push(item);
    }

    return this.cartContents;
  }

  updateCartContents(item: CartItem, qty: number): CartItem[] {
    console.log(item, qty);
    // Find matching CartItem and get index
    const itemIndex = this.cartContents.findIndex((cartItem) => {
      return cartItem.product?.id === item.product?.id;
    });

    // itemIndex of 0 or above means item is in array, (-1) means not present
    if (itemIndex >= 0) {
      this.cartContents[itemIndex].quantity = qty;
    }

    return this.cartContents;
  }

  removeFromCartContents(item: CartItem): CartItem[] {
    // Filter out the CartItem from the array
    this.cartContents = this.cartContents.filter(cartItem => cartItem.product?.id != item.product?.id);
    // Return the array
    return this.cartContents;
  }

  emptyCartContents() {
    // Set to empty array
    this.cartContents = [];
    // Return array
    return this.cartContents;
  }
}
