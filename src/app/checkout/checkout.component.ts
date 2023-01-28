import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CartService } from '../services/cart.service';
import { CartItem } from '../models/CartItem';
import { CustomerContact } from '../models/CustomerContact';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  total: number;
  cartItems: CartItem[];
  states: string[] = [
    'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
    'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
    'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
    'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
    'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
  ];


  checkoutForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    firstName: new FormControl('', [Validators.required, Validators.minLength(1)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    street: new FormControl('', [Validators.required, Validators.minLength(5)]),
    city: new FormControl('', [Validators.required, Validators.minLength(1)]),
    state: new FormControl('', [Validators.required, Validators.minLength(2)]),
    zip: new FormControl('', [Validators.required, Validators.pattern(/^(\d{5}(-\d{4})?|[A-Z]\d[A-Z] *\d[A-Z]\d)$/)]),
    paymentInfo: new FormGroup({
      ccdNumber: new FormControl('', [Validators.required, Validators.pattern(
        /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/
      )]),
      expirationDate: new FormControl('', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/)]),
      securityCode: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{3,4}$/)])
    })
  });


  constructor(private cartService: CartService) { 
    this.total = this.cartService.cartTotal;
    this.cartItems = this.cartService.getCartContents();
  }
  
  ngOnInit(): void {
  }

  onPlaceOrder(): void {
    const formData = this.checkoutForm.value;
    console.log(formData.email);

    const customerContactInfo: CustomerContact = new CustomerContact(
      (formData.firstName! + ' ' + formData.lastName!), formData.email!
    );

    // Store data in the Cart Service
    this.cartService.customerContact = customerContactInfo;
  }

  // Getters for form inputs (used for form validation)
  get email() { return this.checkoutForm.get('email'); }
  get firstName() { return this.checkoutForm.get('firstName'); }
  get lastName() { return this.checkoutForm.get('lastName'); }
  get street() { return this.checkoutForm.get('street'); }
  get city() { return this.checkoutForm.get('city'); }
  get state() { return this.checkoutForm.get('state'); }
  get zip() { return this.checkoutForm.get('zip'); }
  get paymentInfo() { return this.checkoutForm.get('paymentInfo'); }
}
