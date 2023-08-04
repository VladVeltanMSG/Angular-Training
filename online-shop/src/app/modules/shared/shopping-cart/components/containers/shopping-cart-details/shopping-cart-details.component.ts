import { Component } from '@angular/core';
import { Product } from 'src/app/modules/shared/types/products.types';
import { ShoppingCartService } from 'src/app/modules/shared/shopping-cart/services/shopping-cart-service';
import { OrderCreateDto } from 'src/app/modules/shared/types/order-create-dto.types';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-shopping-cart-details',
  templateUrl: './shopping-cart-details.component.html',
  styleUrls: ['./shopping-cart-details.component.scss'],
})
export class ShoppingCartDetailsComponent {
  products: Product[] = [];
  apiUrl = environment.apiUrl;

  constructor(
    private cartService: ShoppingCartService,
    private http: HttpClient
  ) {
    this.products = this.cartService.getCartItems();
  }
  placeOrder(order: OrderCreateDto) {
    this.http.post(this.apiUrl + '/orders', order).subscribe(
      (response) => {
        // Handle the success response from the server
        console.log('Order placed successfully:', response);
        // Clear the shopping cart or perform any other actions needed after successful order placement
        this.cartService.clearCart();
      },
      (error) => {
        // Handle any errors that occurred during the API call
        console.error('Error placing order:', error);
        // You can display an error message to the user or take appropriate actions here
      }
    );
  }
}
