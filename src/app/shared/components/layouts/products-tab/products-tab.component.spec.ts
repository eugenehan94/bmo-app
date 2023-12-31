import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsTabComponent } from './products-tab.component';

describe('ProductsTabComponent', () => {
  let component: ProductsTabComponent;
  let fixture: ComponentFixture<ProductsTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsTabComponent]
    });
    fixture = TestBed.createComponent(ProductsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
