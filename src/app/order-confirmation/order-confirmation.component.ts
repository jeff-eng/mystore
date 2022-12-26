import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {
  
  private _customerName: string = '';
  private _customerEmail: string = '';

  get customerName() {
    return this._customerName;
  }

  set customerName(name: string) {
    this._customerName = name;
  }

  get customerEmail() {
    return this._customerEmail;
  }

  set customerEmail(email: string) {
    this._customerEmail = email;
  }

  constructor(private cartService: CartService) { 
  }

  ngOnInit(): void {
    this.customerName = `${this.cartService.customerContact.customerName}`;
    this.customerEmail = `${this.cartService.customerContact.customerEmail}`;
  }

  ngOnDestroy(): void {
    // Clear customer contact property
    this.cartService.customerContact = {
      customerName: '',
      customerEmail: ''
    }

    // Clear cart
    this.cartService.emptyCartContents();

  }
}
