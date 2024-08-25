import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HomeComponent } from './home.component';
// import { NavbarComponent } from './components/navbar/navbar.component';
// import { HeroComponent } from './components/hero/hero.component';
import { PersonalHomeModule } from './home.module';
import { ScreenSizeReducer } from '../../../store/app/reducers/app.reducer';
//ngrx
import { StoreModule } from '@ngrx/store';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Personal home component tests', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  //compileComponents is asynchronous, it uses the waitForAsync
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        PersonalHomeModule,
        StoreModule.forRoot(ScreenSizeReducer),
        HttpClientTestingModule,
      ],
      //   declarations: [NavbarComponent, HeroComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create HomeComponent (page)', () => {
    expect(component).toBeDefined();
  });
  it('should have a navbar component', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-personal-navbar')).not.toBeNull();
  });
  it('should have exactly one navbar component', () => {
    const compiled = fixture.nativeElement;
    const navbars = compiled.querySelectorAll('app-personal-navbar');
    expect(navbars.length).toBe(1);
  });
  it('should have a hero component', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-personal-hero')).not.toBeNull();
  });
  it('should have a products tabs component', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-personal-products-tabs')).not.toBeNull();
  });
  it('should have a download banner component', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-person-download-banner')).not.toBeNull();
  });
  it('should have a where to begin component', () => {
    const compiled = fixture.nativeElement;
    expect(
      compiled.querySelector('app-personal-where-to-begin')
    ).not.toBeNull();
  });
  it('should have a footer component', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-personal-footer')).not.toBeNull();
  });
});
