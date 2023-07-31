import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartDetailsComponent } from './modules/shared/shopping-cart/components/containers/shopping-cart-details/shopping-cart-details.component';
import { ProductListComponent } from './components/containers/product-list/product-list.component';
import { ShoppingCartModule } from './modules/shared/shopping-cart/shopping-cart.module';
import { ProductsDetailsComponent } from './components/containers/product-details/product-details.component';

const routes: Routes = [
  {
    path:'',component:ProductListComponent
  },
  {
    path:'cart',component:ShoppingCartDetailsComponent
  },
  {
    path:'productDetails/:id',component:ProductsDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
