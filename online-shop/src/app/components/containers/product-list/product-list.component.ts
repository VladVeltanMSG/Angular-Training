import { Component, Input, OnInit } from '@angular/core';
import { products } from 'src/app/mocks/products.mocks';
import { Product } from 'src/app/modules/shared/types/products.types';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductService } from 'src/app/services/products.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit{
  products: Product[] = [];

  constructor(private productService: ProductService) {
    this.getProducts();
  }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(): void {
    this.productService
      .getAllProducts()
      .subscribe((prod) => (this.products = prod));
  }
}
