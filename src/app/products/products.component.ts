import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';

import { DiscountOffers } from '../shared/classesAndTypes/discount.enum';
import { IProduct } from '../shared/classesAndTypes/product.interface';
import { ICategory } from '../shared/classesAndTypes/category.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  Discount: DiscountOffers;
  StoreName: string;
  StoreLogo: string;
  ProductList: IProduct[];
  CategoryList: ICategory[];
  ClientName: string;
  IsPurchased: boolean;
  userName: string = "";

  constructor(private productService: ProductServiceService) {
    this.Discount = DiscountOffers["15%"];
    this.StoreName = "My Store";
    this.StoreLogo = "../assets/img.png";
    this.ProductList = [];
    this.CategoryList = [
      { id: 1, name: "Category 1" },
      { id: 2, name: "Category 2" },
    ];
    this.ClientName = "george";
    this.IsPurchased = false;
  }

  ngOnInit(): void {
    this.renderValues();
  }

  public renderValues(): void {
    this.ProductList = this.productService.getAllProducts();
  }

  buy(): void {
    this.IsPurchased = !this.IsPurchased;
  }
}