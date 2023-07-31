import { Component,Input } from '@angular/core';
import { Product } from 'src/app/modules/shared/types/products.types';
import { IconButtonComponent } from 'src/app/modules/shared/icon-button/icon-button.component';

@Component({
  selector: 'app-shopping-cart-details-view',
  templateUrl: './shopping-cart-details-view.component.html',
  styleUrls: ['./shopping-cart-details-view.component.scss']
})
export class ShoppingCartDetailsViewComponent {
@Input() products!:Product[];
onRemoveButtonClick(product:Product)
{
  console.log("Removed");
}
}
