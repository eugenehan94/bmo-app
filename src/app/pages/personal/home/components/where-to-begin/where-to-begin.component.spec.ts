import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhereToBeginComponent } from './where-to-begin.component';

describe('WhereToBeginComponent', () => {
  let component: WhereToBeginComponent;
  let fixture: ComponentFixture<WhereToBeginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhereToBeginComponent]
    });
    fixture = TestBed.createComponent(WhereToBeginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
