import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productDataURL = 'assets/data.json';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    // Assert return value from get method is array of Products; 
    // this automatically maps returned response to an array of Products
    return this.http.get<Product[]>(this.productDataURL);
  }
  
}
