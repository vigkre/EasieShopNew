import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'https://localhost:5001/api/'

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(`${this.baseUrl}products`);
  }

  getProductByName(name: string) {
    return this.http.get(`${this.baseUrl}products/ProductByName/${name}`);
  }
}
