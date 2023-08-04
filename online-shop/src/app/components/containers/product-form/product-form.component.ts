import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/products.service';
import { Product } from 'src/app/modules/shared/types/products.types';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  @Input() productId: string | null | undefined;
  @Input() mode!: string;
  productForm!: FormGroup;
  product!: Product;
  concatenatedString!: string;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.productForm = new FormGroup({
      name: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      price: new FormControl(0, [Validators.required, Validators.min(0)]),
      image: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
    console.log(this.productId);
    if (this.productId) {
      this.productService.getProduct(this.productId).subscribe((product) => {
        console.log('log la product dupa get ', product);
        this.product = product;
        this.productForm.patchValue({
          name: product.name,
          category: product.category,
          price: product.price,
          image: product.image,
          description: product.description,
        });
      });
    }
  }

  onEvent($event: string) {
    //$event primeste save sau cancel de la product-form-view
    this.concatenatedString = this.mode + '-' + $event;
    switch (this.concatenatedString) {
      case 'edit-page-save':
        console.log('in edit-page-save');
        try {
          if (this.productId) {
            let newProduct: Product = {
              id: this.product.id,
              name: this.productForm.value.name,
              description: this.productForm.value.description,
              category: this.productForm.value.category,
              image: this.productForm.value.image,
              price: this.productForm.value.price,
            };
            console.log(newProduct);
            this.productService.updateProduct(newProduct).subscribe();
            console.log('Am updatat un produs cu success');
          }
        } catch {
          console.log('failed to update');
        }
        break;
      case 'edit-page-cancel':
        if (this.product) this.productForm.patchValue(this.product);
        console.log(' in edit-page-cancel');
        break;
      case 'create-page-save':
        try {
          let newProduct: Product = {
            id: '',
            name: this.productForm.value.name,
            description: this.productForm.value.description,
            category: this.productForm.value.category,
            image: this.productForm.value.image,
            price: this.productForm.value.price,
          };
          console.log(newProduct);
          this.productService.addProduct(newProduct).subscribe();
          console.log('Am creat un produs cu success');
        } catch {
          console.log('failed to update');
        }
        console.log('in create-page-save');
        
        break;
      case 'create-page-cancel':
        console.log('in create-page-cancel');
        this.productForm.reset();
        
        break;
    }
  }
}
