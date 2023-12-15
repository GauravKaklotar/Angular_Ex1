import { Component } from '@angular/core';

interface MenuItem {
  src: string;
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    menus: MenuItem[] = [
      {
        src: '../../assets/products.svg',
        name: 'Products',
      },
      {
        src: '../../assets/users.svg',
        name: 'Users',
      },
      {
        src: '../../assets/city.svg',
        name: 'Cities',
      }
    ];
}
