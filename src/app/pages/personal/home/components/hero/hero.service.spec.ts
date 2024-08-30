import { TestBed } from '@angular/core/testing';
import { HeroService } from './hero.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HeroBannerOptionsType } from 'src/app/core/interfaces';
describe('Personal home hero component service', () => {
  let service: HeroService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HeroService],
    });
    service = TestBed.inject(HeroService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });
  it('service should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should fetch data', () => {
    const mockData: HeroBannerOptionsType[] = [
      {
        src: 'http://localhost:5000/images/personal/home/hero/personal-hero-banner-one.jpg',
        alt: 'Hero banner',
        title: 'Get up to $1200 in value',
        description:
          'Feel good about your savings progress. This includes a 5% promo interest rate** when you open a chequing and a Savings Amplifier Account.',
        linkHref:
          'https://www.bmo.com/main/personal/bank-accounts/new-bank-account-offers-and-promotions/?icid=ba-FEAT1907EDB4-AMBMO14',
        linkAriaLabel: 'Learn more details about this limited time offer',
        linkName: 'Learn more',
      },
    ];
    service.getHeroBannerOptions().subscribe((data) => {
      expect(data.length).toBe(1);
      expect(data).toEqual(mockData);
    });
    const req = httpMock.expectOne(
      'http://localhost:5000/api/v1/personal/home/hero'
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });
});
