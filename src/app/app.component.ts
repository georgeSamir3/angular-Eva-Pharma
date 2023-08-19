
import { Component, AfterViewInit, ChangeDetectorRef, QueryList, ViewChildren } from '@angular/core';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  show: boolean = true;
  @ViewChildren(ProductsComponent)
  productsComponents!: QueryList<ProductsComponent>;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.renderChildValues();
  }

  renderChildValues(): void {
    if (this.productsComponents && this.productsComponents.length > 0) {
      const productsComponent = this.productsComponents.first;
      productsComponent.renderValues();

      setTimeout(() => {
        this.show = !this.show;
        this.cdr.detectChanges();
        console.log(this.show);
      });
    }
  }

  toggleProducts(): void {
    this.show = !this.show;
  }
}