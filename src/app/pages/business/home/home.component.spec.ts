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
});
