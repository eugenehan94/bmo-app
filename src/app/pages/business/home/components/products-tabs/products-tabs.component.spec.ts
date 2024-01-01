import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsTabsComponent } from './products-tabs.component';

describe('ProductsTabsComponent', () => {
  let component: ProductsTabsComponent;
  let fixture: ComponentFixture<ProductsTabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsTabsComponent]
    });
    fixture = TestBed.createComponent(ProductsTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
