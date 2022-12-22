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
    window.alert(`Removed item ${item.product?.name} from cart!`);
    
  }

  onQtyUpdate(item: CartItem, qty: number) {
    this.cartItems = this.cartService.updateCartContents(item, qty);
    this.total = this.cartService.cartTotal;
  }

}
