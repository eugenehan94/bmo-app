import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSiteSelectorComponent } from './menu-site-selector.component';

describe('MenuSiteSelectorComponent', () => {
  let component: MenuSiteSelectorComponent;
  let fixture: ComponentFixture<MenuSiteSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuSiteSelectorComponent]
    });
    fixture = TestBed.createComponent(MenuSiteSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
