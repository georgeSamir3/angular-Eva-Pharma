import { Injectable } from '@angular/core';
import { IProduct } from './shared/classesAndTypes/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private products: IProduct[] = [
    { id: 1, name: 'Product 1', quantity: 10, price: 20, img: '../assets/img.png' },
    { id: 2, name: 'Product 2', quantity: 5, price: 15, img: '../assets/img.png' },
  ];

  constructor() { }

  getAllProducts(): IProduct[] {
    return this.products;
  }

  getProductById(prdId: any): IProduct | null {
    if (typeof prdId !== 'number') {
      return null;
    }

    const product = this.products.find(p => p.id === prdId);
    return product ? product : null;
  }
}