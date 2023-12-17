import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  providers: [ProductService]
})
export class ProductDetailsComponent {
  @Input('id') id!: number;

  product!: IProduct;

  constructor(private productService: ProductService){
    this.productService.getProduct(this.id).then((product: IProduct) => {
      this.product = product;
      console.log(this.product);
    });
  }
}
