import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleAccountsSectionComponent } from './multiple-accounts-section.component';

describe('MultipleAccountsSectionComponent', () => {
  let component: MultipleAccountsSectionComponent;
  let fixture: ComponentFixture<MultipleAccountsSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultipleAccountsSectionComponent]
    });
    fixture = TestBed.createComponent(MultipleAccountsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
