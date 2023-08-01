import { Component, Input } from '@angular/core';
import { Product } from 'src/app/modules/shared/types/products.types';
import { ShoppingCartService } from 'src/app/services/shopping-cart-service';
@Component({
  selector: 'app-products-list-view',
  templateUrl: './products-list-view.component.html',
  styleUrls: ['./products-list-view.component.scss'],
})
export class ProductsListViewComponent {
  @Input() products: Product[] | undefined;
  constructor(private cartService: ShoppingCartService) {} // Inject the ShoppingCartService

  onAddToCart(product: Product) {
    this.cartService.addToCart(product); // Add the product to the cart
  }
  isProductInCart(productId: string): boolean {
    const cartItems = this.cartService.getCartItems();
    return cartItems.some(item => item.id === productId);
  }
  
}
