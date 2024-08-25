import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PersonalBankAccountsMainComponent } from './main.component';
import { PersonalBankAccountsMainModule } from './main.module';
//ngrx
import { StoreModule } from '@ngrx/store';
import { ScreenSizeReducer } from '../../../../store/app/reducers/app.reducer';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Banking-accounts main component', () => {
  let component: PersonalBankAccountsMainComponent;
  let fixture: ComponentFixture<PersonalBankAccountsMainComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        PersonalBankAccountsMainModule,
        StoreModule.forRoot(ScreenSizeReducer),
        HttpClientTestingModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalBankAccountsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create main component', () => {
    expect(component).toBeDefined();
  });
  it('should have a navbar', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-personal-navbar')).not.toBeNull();
  });
});
