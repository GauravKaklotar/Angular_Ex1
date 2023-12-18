import { Component } from '@angular/core';
import { IProduct } from '../interface/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  providers: [ProductService]
})
export class ProductsComponent {

  allProducts!: IProduct[];
  product!: IProduct;

  // filterdproducts!: IProduct[];

  // searchText!: string;

  constructor(private productService: ProductService){
    this.productService.getAllProducts().then((productList: IProduct[]) => {
      this.allProducts = productList;
      // this.filterdproducts = productList;
      console.log(this.allProducts);
    });
  }

  //  filteredProducts() {
  //   const searchLower = this.searchText.toLowerCase().trim();
  //   this.filterdproducts = this.allProducts.filter(product =>
  //     product.category.toLowerCase().includes(searchLower) ||
  //     product.manufacturer.toLowerCase().includes(searchLower)
  //   );
  // }

  // ngDoCheck()
  // {
  //   console.log(this.searchText);
  // }
}
