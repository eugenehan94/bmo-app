import { TestBed } from '@angular/core/testing';

import { WhereToBeginService } from './where-to-begin.service';

describe('WhereToBeginService', () => {
  let service: WhereToBeginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhereToBeginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
