import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  { path: 'products', title: 'Product List', component: ProductsComponent },
  { path: 'products/:id', title: 'Product Item', component: ProductDetailComponent },
  { path: 'cart', title: 'Your Cart', component: CartComponent},
  { path: 'checkout', title: 'Checkout', component: CheckoutComponent},
  { path: 'order-confirmation', title: 'Order Confirmation', component: OrderConfirmationComponent},
  { path: '', redirectTo: '/products', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
