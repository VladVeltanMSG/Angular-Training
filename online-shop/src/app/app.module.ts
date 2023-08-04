import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/containers/product-list/product-list.component';
import { ProductDetailsComponent } from './components/containers/product-details/product-details.component';
import { ProductsListViewComponent } from './components/presentational/products-list-view/products-list-view.component';
import { ProductsDetailsViewComponent } from './components/presentational/product-details-view/product-details-view.component';
import { ShoppingCartModule } from './modules/shared/shopping-cart/shopping-cart.module';
import { ShoppingCartService } from './modules/shared/shopping-cart/services/shopping-cart-service';
import { RouterModule } from '@angular/router';
import { ProductFormViewComponent } from './components/presentational/product-form-view/product-form-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductFormComponent } from './components/containers/product-form/product-form.component';
import { CreateProductPageComponent } from './components/pages/create-product-page/create-product-page.component';
import { EditProductPageComponent } from './components/pages/edit-product-page/edit-product-page.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductsListViewComponent,
    ProductsDetailsViewComponent,
    ProductFormViewComponent,
    ProductFormComponent,
    CreateProductPageComponent,
    EditProductPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ShoppingCartModule,HttpClientModule,RouterModule,ReactiveFormsModule],
  providers: [ShoppingCartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
