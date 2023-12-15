import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { CitiesComponent } from './cities/cities.component';

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
    title: 'Products'
  },
  {
    path: 'users',
    component: UsersComponent,
    title: 'Users'
  },
  {
    path: 'cities',
    component: CitiesComponent,
    title: 'Cities'
  }
];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
