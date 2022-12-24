import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  
  constructor(private http: HttpClient) { 
    this._cartTotal = 0;
  }

  private calculateCartTotal() {
    const sumTotal = this.cartContents.reduce((total, currentItem) => {
      return total += currentItem.product!.price * currentItem.quantity;
    }, 0);

    this.cartTotal = sumTotal;
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

    this.calculateCartTotal();

    return this.cartContents;
  }

  updateCartContents(item: CartItem, qty: number): CartItem[] {
    // Find matching CartItem and get index
    const itemIndex = this.cartContents.findIndex((cartItem) => {
      return cartItem.product?.id === item.product?.id;
    });

    // itemIndex of 0 or above means match found, (-1) means no match
    if (itemIndex >= 0) {
      this.cartContents[itemIndex].quantity = qty;
    }

    this.calculateCartTotal();

    return this.cartContents;
  }

  removeFromCartContents(item: CartItem): CartItem[] {
    this.cartContents = this.cartContents.filter(cartItem => cartItem.product?.id != item.product?.id);
    
    this.calculateCartTotal();

    return this.cartContents;
  }

  emptyCartContents() {
    this.cartContents = [];

    this.calculateCartTotal();

    return this.cartContents;
  }
  
}
