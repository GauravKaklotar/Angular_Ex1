import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { CitiesComponent } from './cities/cities.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { CityDetailsComponent } from './cities/city-details/city-details.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    UsersComponent,
    CitiesComponent,
    ProductDetailsComponent,
    UserDetailsComponent,
    CityDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
