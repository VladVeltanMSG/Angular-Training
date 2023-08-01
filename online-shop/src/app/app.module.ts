import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/containers/product-list/product-list.component';
import { ProductsDetailsComponent } from './components/containers/product-details/product-details.component';
import { ProductsListViewComponent } from './components/presentational/products-list-view/products-list-view.component';
import { ProductsDetailsViewComponent } from './components/presentational/product-details-view/product-details-view.component';
import { ShoppingCartModule } from './modules/shared/shopping-cart/shopping-cart.module';
import { ShoppingCartService } from './services/shopping-cart-service';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductsDetailsComponent,
    ProductsListViewComponent,
    ProductsDetailsViewComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ShoppingCartModule],
  providers: [ShoppingCartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
