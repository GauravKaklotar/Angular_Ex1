import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  providers: [ProductService],
})
export class ProductDetailsComponent {
  product!: IProduct;
  id!: number;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {
    this.id = Number(this.activatedRoute.snapshot.params['id']);
    try {
      this.productService.getProductById(this.id).then((product: IProduct) => {
        this.product = product;
        console.log(this.product);
      });
    } catch (error) {
      console.error('Invalid or missing id', error);
    }
  }
}
