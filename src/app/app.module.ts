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
import { FormsModule } from '@angular/forms';
import { TooltipDirective } from './directives/tooltip.directive';
import { HighlightDirective } from './directives/highlight.directive';
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
    CityDetailsComponent,
    TooltipDirective,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
