import { Injectable } from '@angular/core';
import { IProduct } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  url: string = 'http://localhost:3000/products';

  async getAllProducts(): Promise<IProduct[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getProduct(id: number): Promise<IProduct> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json()?? {};
  }
}
