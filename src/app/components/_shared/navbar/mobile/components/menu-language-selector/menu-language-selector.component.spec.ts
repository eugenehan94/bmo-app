import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLanguageSelectorComponent } from './menu-language-selector.component';

describe('MenuLanguageSelectorComponent', () => {
  let component: MenuLanguageSelectorComponent;
  let fixture: ComponentFixture<MenuLanguageSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuLanguageSelectorComponent]
    });
    fixture = TestBed.createComponent(MenuLanguageSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
