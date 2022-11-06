import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor() { }

  ngOnInit(): void {
      this.products = [
        {
          id: 0,
          name: 'iPhone 14 Pro Max',
          price: 1099.99,
          url: 'https://via.placeholder.com/150',
          description: 'The best iPhone yet'
        },
        {
          id: 0,
          name: 'iPad Pro 11-inch M2',
          price: 799.99,
          url: 'https://via.placeholder.com/150',
          description: 'Empowers your creative engine'
        }
      ];
  }
  
}
