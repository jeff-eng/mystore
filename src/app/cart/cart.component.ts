import { Component, OnInit } from '@angular/core';
import { CartItem } from '../models/CartItem';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  total: number;
  toastMessage: string = '';
  // Boolean for hide/show toast notification
  show = false;

  constructor(private cartService: CartService) { 
    this.total = this.cartService.cartTotal;
  }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartContents();
    
  }
  
  // Remove
  onRemove(item: CartItem): void {
    // Remove item from the Cart Service and update cartItems property with returned array
    const returnedArray = this.cartService.removeFromCartContents(item);
    this.cartItems = returnedArray;
    this.total = this.cartService.cartTotal;

    this.triggerToast(item, 'removed from your cart');
  }

  onQtyUpdate(item: CartItem, qty: number) {
    this.cartItems = this.cartService.updateCartContents(item, qty);
    this.total = this.cartService.cartTotal;

    this.triggerToast(item, 'quantity updated');
  }

  private triggerToast(item: CartItem, message: string): void {
    this.show = true;
    this.toastMessage = `${item.product?.name} ${message}.`;
    setTimeout(() => (this.show = false), 3000);
  }
}
