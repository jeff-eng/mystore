import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/Product';

@Component({
  selector: 'app-product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styleUrls: ['./product-thumbnail.component.css']
})
export class ProductThumbnailComponent implements OnInit {

  // @Input() allows property to receive value from the parent component
  @Input() product: Product;

  constructor() { 
    this.product = {
      id: 0,
      name: '',
      price: 0.00,
      url: 'https://via.placeholder.com/150',
      description: ''
    };
  }

  ngOnInit(): void {
  }

}
