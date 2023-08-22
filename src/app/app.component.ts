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
  show: boolean = false;

  @ViewChild('child', { static: false })
  child!: ProductsComponent;

  constructor() {}

  ngOnInit(): void {}

  toggleProducts(): void {
    this.show = !this.show;
    if (this.show) {
      setTimeout(() => {
        this.child.renderValues();
      });
    }
  }
}
