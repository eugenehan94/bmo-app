import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSearchBarComponent } from './menu-search-bar.component';

describe('MenuSearchBarComponent', () => {
  let component: MenuSearchBarComponent;
  let fixture: ComponentFixture<MenuSearchBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuSearchBarComponent]
    });
    fixture = TestBed.createComponent(MenuSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
