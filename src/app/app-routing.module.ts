import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MainLayoutComponent } from './components/mainLayout/mainLayout.component';
import { NotFoundComponent } from './components/notFound/notFound.component';
import { CartChildComponent } from './components/order/cartChild/cart-child.component';
import { CartParentComponent } from './components/order/cartParent/cart-parent.component';
import { ProductDetailsComponent } from './components/order/product-details/product-details.component';
import { ProductAddComponent } from './components/order/product-add/product-add.component';
import { ProductEditComponent } from './components/order/product-edit/product-edit.component';
import { AuthGuard } from './guards/auth.guard';
import { LogoutComponent } from './components/logout/logout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'products', component: CartChildComponent },
      { path: 'products/:pid', component: ProductDetailsComponent },
      {
        path: 'orders',
        component: CartParentComponent,
        canActivate: [AuthGuard],
      },
      { path: 'add-product', component: ProductAddComponent },
      { path: 'edit-product/:pid', component: ProductEditComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
