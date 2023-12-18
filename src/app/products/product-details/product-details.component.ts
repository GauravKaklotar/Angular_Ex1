import { Component, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  @ViewChild('myForm') form!: NgForm;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {
    this.id = Number(this.activatedRoute.snapshot.params['id']);
    try {
      this.productService.getProductById(this.id).then((product: IProduct) => {
        this.product = product;
        console.log(this.product);

        // set the values of form fields
        this.form.setValue({
          id: this.product.id,
          name: this.product.name,
          category: this.product.category,
          price: this.product.price,
          stock: this.product.stock,
          description: this.product.description,
          manufacturer: this.product.manufacturer,
        });
      });
    } catch (error) {
      console.error('Invalid or missing id', error);
    }

  }

  OnSubmit() {}
}
