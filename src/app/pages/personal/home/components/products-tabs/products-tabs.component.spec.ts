import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ProductsTabsComponent } from './products-tabs.component';
import { PersonalHomeModule } from '../../home.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
//ngrx
import { StoreModule } from '@ngrx/store';
import { ScreenSizeReducer } from '../../../../../store/app/reducers/app.reducer';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
describe('Personal home products-tabs component', () => {
  let component: ProductsTabsComponent;
  let fixture: ComponentFixture<ProductsTabsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        PersonalHomeModule,
        HttpClientTestingModule,
        StoreModule.forRoot(ScreenSizeReducer),
        // Do not want to test animations, thus imported NoopAnimationsModule
        NoopAnimationsModule,
        MatTabsModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create the products-tabs component', () => {
    expect(component).toBeDefined();
  });
  it('should have the correct title property value', () => {
    component.title = 'BMO Personal Banking';
    fixture.detectChanges();
    expect(component.title).toBe('BMO Personal Banking');
  });
  it('should have the correct sub-title property value', () => {
    component.subTitle = 'What can we help you find today?';
    fixture.detectChanges();
    expect(component.subTitle).toBe('What can we help you find today?');
  });
  it('should have correct title text, after tab contents are retrieved', () => {
    component.tabContents = [
      {
        label: 'test',
        cardData: [
          {
            image:
              'http://localhost:5000/images/personal/home/products-tabs/personal-special-offer-tile-picture.jpg',
            imageAlt: 'Special offers',
            title: 'Special Offers',
            description:
              'From everyday banking to credit cards, find ways to save money and make real financial progress.',
            src: 'https://www.bmo.com/main/personal/promotions/',
            srcTitle: 'Explore Offers',
          },
        ],
      },
    ];
    fixture.detectChanges();
    const element = fixture.nativeElement.querySelector('h1');
    expect(element.textContent).toContain('BMO Personal Banking');
  });
  it('should have correct sub-title, after tab contents are retrieved', () => {
    component.tabContents = [
      {
        label: 'test',
        cardData: [
          {
            image:
              'http://localhost:5000/images/personal/home/products-tabs/personal-special-offer-tile-picture.jpg',
            imageAlt: 'Special offers',
            title: 'Special Offers',
            description:
              'From everyday banking to credit cards, find ways to save money and make real financial progress.',
            src: 'https://www.bmo.com/main/personal/promotions/',
            srcTitle: 'Explore Offers',
          },
        ],
      },
    ];
    fixture.detectChanges();
    const element = fixture.nativeElement.querySelector('h2');
    expect(element.textContent).toContain('What can we help you find today?');
  });
  it('should change to selected tab on click', () => {
    component.tabContents = [
      {
        label: 'Featured',
        cardData: [
          {
            image:
              'http://localhost:5000/images/personal/home/products-tabs/personal-special-offer-tile-picture.jpg',
            imageAlt: 'Special offers',
            title: 'Special Offers',
            description:
              'From everyday banking to credit cards, find ways to save money and make real financial progress.',
            src: 'https://www.bmo.com/main/personal/promotions/',
            srcTitle: 'Explore Offers',
          },
        ],
      },
      {
        label: 'Bank Accounts',
        cardData: [
          {
            image:
              'http://localhost:5000/images/personal/home/hero/personal-hero-banner-one.jpg',
            imageAlt: 'Special offers',
            title: 'Get up to $1,200 in value',
            description:
              'This includes a 5% promo interest rate<a href="https://www.bmo.com/pdf/savings-amplifier-promotional-interest-rate-offer-en.pdf" target="_blank" aria-label="Bonus Rate Offer Terms and Conditions, opens in a new tab" class="superscript-link">**</a> when you open a Savings Amplifier Account.',
            src: 'https://www.bmo.com/main/personal/bank-accounts/new-bank-account-offers-and-promotions/?icid=ba-US37461EDB4-ATBMO18',
            srcTitle: 'More details',
          },
        ],
      },
    ];
    fixture.detectChanges();
    const tabLabels = fixture.debugElement.queryAll(By.css('.mat-mdc-tab'));
    tabLabels[1].nativeElement.click();
    fixture.detectChanges();
    expect(tabLabels[1].nativeElement.textContent).toContain(
      component.tabContents[1].label
    );
  });
});
