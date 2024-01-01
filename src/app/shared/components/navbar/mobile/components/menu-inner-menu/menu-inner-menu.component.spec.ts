import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuInnerMenuComponent } from './menu-inner-menu.component';

describe('MenuInnerMenuComponent', () => {
  let component: MenuInnerMenuComponent;
  let fixture: ComponentFixture<MenuInnerMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuInnerMenuComponent]
    });
    fixture = TestBed.createComponent(MenuInnerMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
