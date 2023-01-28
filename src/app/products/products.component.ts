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
  sortedProducts: Product[] = [];
  private _sortType: string = 'high-low';

  get sortType(): string {
    return this._sortType;
  }

  set sortType(value: string) {
    this._sortType = value;

    // Sort method
    this.sortedProducts = this.sortBy(value);
  } 

  // Inject the Product Service as a dependency
  constructor(private productService: ProductService) { 
  }

  ngOnInit(): void {
    // Subscribe to the observable returned from Product Service  
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  ngDoCheck(): void {
    this.sortedProducts = this.sortBy(this.sortType);
  }
 
  sortBy(type: string): Product[] {
    if (type === 'high-low') {
      return this.products.sort((productA, productB) => productB.price - productA.price);
    }

    return this.products.sort((productA, productB) => productA.price - productB.price);
  }
  
}
