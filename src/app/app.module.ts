import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './shared/component/home/home.component';
import { UsersComponent } from './shared/component/users/users.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { FairsComponent } from './shared/component/fairs/fairs.component';
import { ProductsComponent } from './shared/component/products/products.component';
import { PageNotFoundComponent } from './shared/component/page-not-found/page-not-found.component';
import { UserComponent } from './shared/component/users/user/user.component';
import { UserFormComponent } from './shared/component/users/user-form/user-form.component';
import { ProductComponent } from './shared/component/products/product/product.component';
import { ProductFormComponent } from './shared/component/products/product-form/product-form.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    NavbarComponent,
    FairsComponent,
    ProductsComponent,
    PageNotFoundComponent,
    UserComponent,
    UserFormComponent,
    ProductComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
