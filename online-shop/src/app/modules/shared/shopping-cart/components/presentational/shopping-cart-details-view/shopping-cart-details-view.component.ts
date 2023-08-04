import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/modules/shared/types/products.types';
import { ShoppingCartService } from 'src/app/modules/shared/shopping-cart/services/shopping-cart-service';
import { OrderCreateDto } from 'src/app/modules/shared/types/order-create-dto.types';
import { ProductIdAndQuantity } from 'src/app/modules/shared/types/product-id-and-quantity.types';

@Component({
  selector: 'app-shopping-cart-details-view',
  templateUrl: './shopping-cart-details-view.component.html',
  styleUrls: ['./shopping-cart-details-view.component.scss'],
})
export class ShoppingCartDetailsViewComponent {
  @Input() products!: Product[];
  @Output() placeOrder = new EventEmitter<OrderCreateDto>();
  productIdAndQuantities: ProductIdAndQuantity[] = [];

  constructor(private cartService: ShoppingCartService) {}

  onRemoveButtonClick(product: Product) {
    console.log('Removed');
    this.cartService.removeFromCart(product.id);
    this.products = this.cartService.getCartItems();
  }

  onUpdateQuantity(productId: string, quantity: number) {
    // Check if the productId already exists in the list
    if (quantity > 0) {
      const existingProductIndex = this.productIdAndQuantities.findIndex(
        (item) => item.productId === productId
      );

      if (existingProductIndex !== -1) {
        this.productIdAndQuantities[existingProductIndex].quantity = quantity;
      } else {
        const productIdAndQuantity: ProductIdAndQuantity = {
          productId: productId,
          quantity: quantity,
        };

        this.productIdAndQuantities.push(productIdAndQuantity);
      }
      console.log('modificat cantitatea' + quantity);
    } else {
      console.log('cantitate nepotrivita');
    }
  }

  onCheckout() {
    if (window.confirm('Are you sure you want to checkout?')) {
      // Create the OrderCreateDto instance
      const order: OrderCreateDto = {
        customerId: 'de96921d-2f8d-46e7-8061-31468180de96', // Set the customer ID here

        products: this.productIdAndQuantities,
      };

      this.placeOrder.emit(order); // Emit the custom event with the order data
      console.log('Am trimis comanda la smart component');
    }
  }
}
