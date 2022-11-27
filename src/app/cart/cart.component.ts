import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  total;

  constructor() { this.total = 0;}

  ngOnInit(): void {
    this.total = 500;
  }

  // onCheckout(): void {
  //   alert('Checking out');
  // } 

}
