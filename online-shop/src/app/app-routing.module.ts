import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartDetailsComponent } from './modules/shared/shopping-cart/components/containers/shopping-cart-details/shopping-cart-details.component';

const routes: Routes = [
  {
    path:'',component:ShoppingCartDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
