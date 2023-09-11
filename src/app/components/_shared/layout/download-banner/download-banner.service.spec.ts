import { TestBed } from '@angular/core/testing';

import { DownloadBannerService } from './download-banner.service';

describe('DownloadBannerService', () => {
  let service: DownloadBannerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DownloadBannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
