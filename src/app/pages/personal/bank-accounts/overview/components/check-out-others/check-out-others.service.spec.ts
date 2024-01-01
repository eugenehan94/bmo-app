import { TestBed } from '@angular/core/testing';

import { CheckOutOthersService } from './check-out-others.service';

describe('CheckOutOthersService', () => {
  let service: CheckOutOthersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckOutOthersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
