import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BusinessHomeComponent } from './home.component';
import { BusinessHomeModule } from './home.module';
//ngrx
import { StoreModule } from '@ngrx/store';
import { ScreenSizeReducer } from '../../../store/app/reducers/app.reducer';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
describe('Business home page test', () => {
  let component: BusinessHomeComponent;
  let fixture: ComponentFixture<BusinessHomeComponent>;

  //compileComponents is asynchronous, it uses the waitForAsync
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        BusinessHomeModule,
        StoreModule.forRoot(ScreenSizeReducer),
        HttpClientTestingModule,
        RouterTestingModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create the business home page', () => {
    expect(component).toBeDefined();
  });
  it('should have a navbar component', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-business-navbar')).not.toBeNull();
  });
  it('should have app-business-hero component', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-business-hero')).not.toBeNull();
  });
  it('should have app-business-products-tabs component', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-business-products-tabs')).not.toBeNull();
  });
  it('should have app-business-get-in-touch component', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-business-get-in-touch')).not.toBeNull();
  });
  it('should have app-business-download-banner component', () => {
    const compiled = fixture.nativeElement;
    expect(
      compiled.querySelector('app-business-download-banner')
    ).not.toBeNull();
  });
  it('should have app-business-where-to-begin component', () => {
    const compiled = fixture.nativeElement;
    expect(
      compiled.querySelector('app-business-where-to-begin')
    ).not.toBeNull();
  });
  it('should have a footer component', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-business-footer')).not.toBeNull();
  });
});
