import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  // Inject the Product Service as a dependency
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // Subscribe to the observable returned from Product Service  
    this.productService.getProducts().subscribe(data => {
      this.products = data;

    });
  }
  
}
