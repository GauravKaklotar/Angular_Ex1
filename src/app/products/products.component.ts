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

  constructor(public productService: ProductService){
    this.productService.getAllProducts().then((productList: IProduct[]) => {
      this.allProducts = productList;
      console.log(this.allProducts);
    });
  }
}
