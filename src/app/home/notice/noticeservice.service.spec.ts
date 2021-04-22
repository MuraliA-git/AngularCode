import { TestBed } from '@angular/core/testing';

import { NoticeserviceService } from './noticeservice.service';

describe('NoticeserviceService', () => {
  let service: NoticeserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoticeserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
