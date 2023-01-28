import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from '../models/CartItem';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: CartItem;
  @Output() removed = new EventEmitter();
  @Output() quantityUpdated = new EventEmitter();

  ngOptions: Number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor() { 
    this.cartItem = {
      quantity: 0,
      product: {
        id: 0,
        name: '',
        price: 0,
        url: '',
        description: ''
      }
    }
  }

  ngOnInit(): void {
  }

  qtyUpdated(quantity: string): void {
    // Emit an event to parent Cart component
    const qtyValue = Number(quantity);
    this.quantityUpdated.emit(qtyValue);
  }

}
