import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from 'src/app/mocks/products.mocks';
import { Product } from 'src/app/modules/shared/types/products.types';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductsDetailsComponent {
  product!:Product
  constructor(
    private route:ActivatedRoute
  ){}
  ngOnInit():void{
    this.getProduct();
  }
  getProduct():void{
    const id=this.route.snapshot.paramMap.get('id');
    this.product = products.find(p => p.id === id) ?? {} as Product;

  }
}
