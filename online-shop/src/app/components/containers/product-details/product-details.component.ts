import { Component, Input } from '@angular/core';
import { products } from 'src/app/mocks/products.mocks';
import { Product } from 'src/app/modules/shared/types/products.types';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductsDetailsComponent {
  @Input() products: Product[] = products;
  @Input() product: Product = this.products[0];
}
