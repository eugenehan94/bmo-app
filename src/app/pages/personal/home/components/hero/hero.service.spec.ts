import { TestBed } from '@angular/core/testing';
import { HeroService } from './hero.service';

describe('Personal home hero component service', () => {
  let service: HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroService);
  });
  it('service should be created', () => {
    expect(service).toBeTruthy();
  });
});
