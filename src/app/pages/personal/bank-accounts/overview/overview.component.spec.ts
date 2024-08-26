import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PersonalBankAccountsOverviewPage } from './overview.component';
import { OverviewModule } from './overview.module';
//ngrx
import { StoreModule } from '@ngrx/store';
import { ScreenSizeReducer } from '../../../../store/app/reducers/app.reducer';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('Personal bank account overview', () => {
  let component: PersonalBankAccountsOverviewPage;
  let fixture: ComponentFixture<PersonalBankAccountsOverviewPage>;

  //compileComponents is asynchronous, it uses the waitForAsync
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        OverviewModule,
        StoreModule.forRoot(ScreenSizeReducer),
        HttpClientTestingModule,
        RouterTestingModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalBankAccountsOverviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create overview component', () => {
    expect(component).toBeDefined();
  });
  it('should have app-personal-bank-accounts-overview-component', () => {
    const compiled = fixture.nativeElement;
    expect(
      compiled.querySelector('app-personal-bank-accounts-overview-component')
    ).not.toBeNull();
  });
  it('should have app-personal-bank-accounts-featured-products-component', () => {
    const compiled = fixture.nativeElement;
    expect(
      compiled.querySelector(
        'app-personal-bank-accounts-featured-products-component'
      )
    ).not.toBeNull();
  });
  it('should have app-personal-bank-accounts-multiple-accounts-section', () => {
    const compiled = fixture.nativeElement;
    expect(
      compiled.querySelector(
        'app-personal-bank-accounts-multiple-accounts-section'
      )
    ).not.toBeNull();
  });
  it('should have app-personal-bank-accounts-help-me-choose', () => {
    const compiled = fixture.nativeElement;
    expect(
      compiled.querySelector('app-personal-bank-accounts-help-me-choose')
    ).not.toBeNull();
  });
  it('should have app-personal-bank-accounts-check-out-others', () => {
    const compiled = fixture.nativeElement;
    expect(
      compiled.querySelector('app-personal-bank-accounts-check-out-others')
    ).not.toBeNull();
  });
});
