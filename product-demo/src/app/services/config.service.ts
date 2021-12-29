import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  baseUrl = 'assets/data/config.json';
  constructor(
    private productService: ProductService,
    private http: HttpClient
  ) {}

  getConfig() {
    return this.http.get(this.baseUrl);
  }
  updateProductConfugration() {
    let products = this.productService.getProducts();
  }
}
