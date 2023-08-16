import { Component } from '@angular/core';
import { DiscountOffers } from '../shared/classesAndTypes/discount.enum';
import { IProduct } from '../shared/classesAndTypes/product.interface';
import { ICategory } from '../shared/classesAndTypes/category.interface';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  Discount: DiscountOffers;
  StoreName: string;
  StoreLogo: string;
  ProductList: IProduct[];
  CategoryList: ICategory[];
  ClientName: string;
  IsPurchased: boolean;
  userName:string="";

  constructor() {
    
    this.Discount = DiscountOffers["15%"];
    this.StoreName = "My Store";
    this.StoreLogo = "../assets/img.png";
    this.ProductList = [
      { id: 1, name: "Product 1", quantity: 10, price: 20, img: "../assets/img.png" },
      { id: 2, name: "Product 2", quantity: 5, price: 15, img: "../assets/img.png" },
    ];
    this.CategoryList = [
      { id: 1, name: "Category 1" },
      { id: 2, name: "Category 2" },
    ];
    this.ClientName = "george";
    this.IsPurchased = false;
  }
  buy(): void {
    this.IsPurchased = !this.IsPurchased;
  }
}
