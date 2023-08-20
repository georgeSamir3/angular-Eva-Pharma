import {
  Component,
  AfterViewInit,
  ChangeDetectorRef,
  QueryList,
  ViewChildren,
  ViewChild,
  OnInit,
} from '@angular/core';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  show: boolean = true;
  
  @ViewChild(ProductsComponent) child: ProductsComponent;
  productsComponents!: QueryList<ProductsComponent>;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    console.log("child values "+this.child.renderValues());
    this.child.renderValues()
  }
  ngOnInit(): void {}

  toggleProducts(): void {
    this.show = !this.show;
  }
}
