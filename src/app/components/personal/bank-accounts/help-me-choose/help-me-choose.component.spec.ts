import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpMeChooseComponent } from './help-me-choose.component';

describe('HelpMeChooseComponent', () => {
  let component: HelpMeChooseComponent;
  let fixture: ComponentFixture<HelpMeChooseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelpMeChooseComponent]
    });
    fixture = TestBed.createComponent(HelpMeChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
