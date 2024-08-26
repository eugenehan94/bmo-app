import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MainComponent } from './main.component';
import { MainModule } from './main.module';
//ngrx
import { StoreModule } from '@ngrx/store';
import { ScreenSizeReducer } from '../../../store/app/reducers/app.reducer';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
describe('Main not found page', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  //compileComponents is asynchronous, it uses the waitForAsync
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        MainModule,
        StoreModule.forRoot(ScreenSizeReducer),
        RouterTestingModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create main page for not-found', () => {
    expect(component).toBeDefined();
  });
  it('should have a title', () => {
    const compiled = fixture.nativeElement;
    const h2 = compiled.querySelector('h2');
    expect(h2.textContent).toContain(
      "Sorry, but we can't find the page that you're looking for"
    );
  });
  it('should have text to inform user of not found', () => {
    const compiled = fixture.nativeElement;
    const p = compiled.querySelectorAll('.not-found-description-text');
    expect(p.length).toBeGreaterThan(0);
    const firstElement = p[0];
    expect(firstElement).toBeTruthy();
    expect(firstElement.textContent).toContain(
      'It may no longer exist, changed location or is temporarily unavailable.'
    );
    const secondElement = p[1];
    expect(secondElement).toBeTruthy();
    expect(secondElement.textContent).toContain(
      ' Please consider using one of the links below to help you find the information you need or other products.'
    );
  });
  it('should have correct href for home button', () => {
    const href = fixture.debugElement
      .query(By.css('a'))
      .nativeElement.getAttribute('href');
    expect(href).toEqual('/personal');
  });
});
