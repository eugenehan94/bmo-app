import { TestBed } from '@angular/core/testing';

import { HelpMeChooseService } from './help-me-choose.service';

describe('HelpMeChooseService', () => {
  let service: HelpMeChooseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelpMeChooseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
