import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { FormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule}from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './_authgaurd/auth.guard';

import { AuthInterCepter } from './_authgaurd/auth.interceptor';
import { UserService } from './_services/user.service';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { ShowProductDetailsComponent } from './show-product-details/show-product-details.component';
import { ShowProductImgaesDailogComponentComponent } from './show-product-imgaes-dailog-component/show-product-imgaes-dailog-component.component';
import { ProductViewDetailsComponent } from './product-view-details/product-view-details.component';
import { BuyProductComponent } from './buy-product/buy-product.component';
import { OrderConformationComponent } from './order-conformation/order-conformation.component';
import { FooterComponent } from './footer/footer.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    UserComponent,
    LoginComponent,
    NavbarComponent,
    ForbiddenComponent,
    AddNewProductComponent,
    ShowProductDetailsComponent,
    ShowProductImgaesDailogComponentComponent,
    ProductViewDetailsComponent,
    BuyProductComponent,
    OrderConformationComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatDividerModule
  
  ],
  providers: [
    AuthGuard, // Use lowercase here
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterCepter, // Use uppercase here
      multi: true, // Correct typo 'multiL' to 'multi'
    },
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
