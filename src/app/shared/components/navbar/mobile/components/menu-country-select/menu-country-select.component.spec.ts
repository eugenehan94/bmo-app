import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCountrySelectComponent } from './menu-country-select.component';

describe('MenuCountrySelectComponent', () => {
  let component: MenuCountrySelectComponent;
  let fixture: ComponentFixture<MenuCountrySelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuCountrySelectComponent]
    });
    fixture = TestBed.createComponent(MenuCountrySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
