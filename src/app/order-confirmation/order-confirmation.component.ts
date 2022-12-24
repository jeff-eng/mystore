import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {
  
  private _customerName: string = 'bozo';

  get customerName() {
    return this._customerName;
  }

  set customerName(name: string) {
    this._customerName = name;
  }

  constructor() { 
  }

  ngOnInit(): void {
  }

}
