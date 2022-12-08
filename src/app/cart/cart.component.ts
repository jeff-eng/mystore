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
  total;

  constructor(private cartService: CartService) { 
    this.total = 0;
  }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartContents();
  }

  onCheckout(): void {
    // Dummy method to check out
    alert('Checking out');
  }
  
  // Remove
  onRemove(item: CartItem): void {
    // Remove item from the Cart Service and update cartItems property with returned array
    const returnedArray = this.cartService.removeFromCartContents(item);
    console.log(returnedArray);
    this.cartItems = returnedArray;
    // this.cartItems = this.cartService.removeFromCartContents(item);
    window.alert(`Removed item ${item.product?.name} from cart!`);
    
  }

  onQtyUpdate(item: CartItem, qty: number) {
    this.cartItems = this.cartService.updateCartContents(item, qty);
  }

}
