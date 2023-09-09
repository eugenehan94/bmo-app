import { TestBed } from '@angular/core/testing';

import { ProductsTabsService } from './products-tabs.service';

describe('ProductsTabsService', () => {
  let service: ProductsTabsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsTabsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
