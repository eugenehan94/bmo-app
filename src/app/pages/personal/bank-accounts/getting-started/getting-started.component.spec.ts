import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { GettingStartedComponent } from './getting-started.component';
import { GettingStartedModule } from './getting-started.module';
//ngrx
import { StoreModule } from '@ngrx/store';
import { ScreenSizeReducer } from '../../../../store/app/reducers/app.reducer';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
describe('Personal bank accounts getting started', () => {
  let component: GettingStartedComponent;
  let fixture: ComponentFixture<GettingStartedComponent>;

  //compileComponents is asynchronous, it uses the waitForAsync
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        GettingStartedModule,
        StoreModule.forRoot(ScreenSizeReducer),
        HttpClientTestingModule,
        RouterTestingModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GettingStartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create getting-started component', () => {
    expect(component).toBeDefined();
  });
});
