import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { throwError } from 'rxjs';
import { Product } from '../models/Product';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product?: Product;
  selectedQty: number;
  // Option select dropdown variables
  ngOptions: Number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  ngDefaultQty: Number = 1;

  constructor(private productService: ProductService, 
              private cartService: CartService,
              private route: ActivatedRoute) {
                this.selectedQty = 1;
              }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.productService.getProducts().subscribe({
      next: products => {
        // Get the first product in the filtered array
        this.product = products.filter(product => product.id === id).shift();
      },
      error: err => {
        throwError;
      }
    });
  }
  
  addToCart(): void {
    console.log(typeof(this.selectedQty));
    console.log(this.product);
  }

}
