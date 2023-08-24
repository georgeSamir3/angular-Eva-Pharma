import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoDiscountProductComponent } from './no-discount-product.component';

describe('NoDiscountProductComponent', () => {
  let component: NoDiscountProductComponent;
  let fixture: ComponentFixture<NoDiscountProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoDiscountProductComponent]
    });
    fixture = TestBed.createComponent(NoDiscountProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
