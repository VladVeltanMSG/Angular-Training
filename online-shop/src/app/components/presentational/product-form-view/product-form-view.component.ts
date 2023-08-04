import { Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';
import { Product } from 'src/app/modules/shared/types/products.types';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-product-form-view',
  templateUrl: './product-form-view.component.html',
  styleUrls: ['./product-form-view.component.scss'],
})
export class ProductFormViewComponent {
  @Input() product!: Product;
  @Input() productForm!:FormGroup
  @Output() onEvent: EventEmitter<string> = new EventEmitter<string>();


  get name() {
    return this.productForm.get('name');
  }

  get category() {
    return this.productForm.get('category');
  }

  get price() {
    return this.productForm.get('price');
  }

  get image() {
    return this.productForm.get('image');
  }

  get description() {
    return this.productForm.get('description');
  }
  
}
