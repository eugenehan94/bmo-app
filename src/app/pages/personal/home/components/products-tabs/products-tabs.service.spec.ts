import { TestBed } from '@angular/core/testing';
import { ProductsTabsService } from './products-tabs.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TabsType } from 'src/app/core/interfaces';
describe('Personal home products tabs service', () => {
  let service: ProductsTabsService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductsTabsService],
    });
    service = TestBed.inject(ProductsTabsService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });
  it('service should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should fetch data', () => {
    const mockData: TabsType[] = [
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

    service.getTabs().subscribe((data) => {
      expect(data.length).toBe(2);
      expect(data).toEqual(mockData);
    });

    const req = httpMock.expectOne(
      'http://localhost:5000/api/v1/personal/home/products-tabs'
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });

  it('should handle http error', () => {
    const errorMessage = 'Error Code: 404\nMessage: Not Found';
    service.getTabs().subscribe({
      next: () => fail('should have failed with 404 error'),
      error: (error) => {
        expect(error.message).toContain('404');
        expect(error.message).toContain('Not Found');
      },
    });
    // For the service we have retry(2) so it must try two times before it fails
    for (let i = 0; i <= 2; i++) {
      const req = httpMock.expectOne(
        'http://localhost:5000/api/v1/personal/home/products-tabs'
      );
      expect(req.request.method).toBe('GET');
      req.flush('Not Found', { status: 404, statusText: 'Not Found' });
    }
  });
});
