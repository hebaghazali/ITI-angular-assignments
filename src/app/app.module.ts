import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartParentComponent } from './components/order/cartParent/cart-parent.component';
import { CartChildComponent } from './components/order/cartChild/cart-child.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductCardDirective } from './Directives/product-card.directive';
import { EGPNationalIDPipe } from './Pipes/egpnational-id.pipe';
import { CreditCardPipe } from './Pipes/credit-card.pipe';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/notFound/notFound.component';
import { MainLayoutComponent } from './components/mainLayout/mainLayout.component';
import { ProductDetailsComponent } from './components/order/product-details/product-details.component';
import { ProductEditComponent } from './components/order/product-edit/product-edit.component';
import { ProductAddComponent } from './components/order/product-add/product-add.component';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CartChildComponent,
    CartParentComponent,
    SideMenuComponent,
    HomeComponent,
    NotFoundComponent,
    MainLayoutComponent,
    ProductCardDirective,
    EGPNationalIDPipe,
    CreditCardPipe,
    ProductDetailsComponent,
    ProductEditComponent,
    ProductAddComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
