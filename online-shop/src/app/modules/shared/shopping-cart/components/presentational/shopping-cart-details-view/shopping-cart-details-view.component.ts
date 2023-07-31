import { Component, Input } from '@angular/core';
import { Product } from 'src/app/modules/shared/types/products.types';
import { ShoppingCartService } from 'src/app/services/shopping-cart-service';
@Component({
  selector: 'app-shopping-cart-details-view',
  templateUrl: './shopping-cart-details-view.component.html',
  styleUrls: ['./shopping-cart-details-view.component.scss'],
})
export class ShoppingCartDetailsViewComponent {
  @Input() products!: Product[];

  constructor(private cartService: ShoppingCartService) {} // Inject the ShoppingCartService

  onRemoveButtonClick(product: Product) {
    console.log('Removed');
    this.cartService.removeFromCart(product.id);
    this.products = this.cartService.getCartItems(); // Update the products list after removing the item
  }
}
