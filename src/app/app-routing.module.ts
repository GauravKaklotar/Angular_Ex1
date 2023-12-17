import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { CitiesComponent } from './cities/cities.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { CityDetailsComponent } from './cities/city-details/city-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },  
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home'
  },
  {
    path: 'products',
    component: ProductsComponent,
    title: 'Products',
  },
  {
    path: 'product',
    children: [
      {
        path: ':id',
        component: ProductDetailsComponent,
        title: 'Product Details',
      }
    ]
  },
  {
    path: 'users',
    component: UsersComponent,
    title: 'Users'
  },
  {
    path: 'user',
    children: [
      {
        path: ':id',
        component: UserDetailsComponent,
        title: 'User Details',
      }
    ]
  },
  {
    path: 'cities',
    component: CitiesComponent,
    title: 'Cities'
  },
  {
    path: 'city',
    children: [
      {
        path: ':id',
        component: CityDetailsComponent,
        title: 'City Details',
      }
    ]
  }
];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
