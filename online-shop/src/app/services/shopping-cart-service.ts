import { Injectable } from '@angular/core';
import { Product } from '../modules/shared/types/products.types';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private cartItems: Product[] = [];

  constructor() {
    // Încărcăm produsele din Local Storage în momentul inițializării serviciului
    this.loadCartItems();
  }

  private saveCartItems() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  private loadCartItems() {
    const savedCartItems = localStorage.getItem('cartItems');
    if (savedCartItems) {
      this.cartItems = JSON.parse(savedCartItems);
    }
  }

  getCartItems(): Product[] {
    return this.cartItems;
  }

  addToCart(product: Product) {
    const existingProduct = this.cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      console.log('Product already in cart');
    } else {
      this.cartItems.push(product);
      console.log('Product added to cart');
      this.saveCartItems(); // Salvează produsele în Local Storage
    }
  }

  removeFromCart(productId: string) {
    this.cartItems = this.cartItems.filter(item => item.id !== productId);
    this.saveCartItems(); // Save the updated cart items in Local Storage
  }
  getCartItemById(productId: string): Product | undefined {
    return this.cartItems.find(item => item.id === productId);
  }
  
}
