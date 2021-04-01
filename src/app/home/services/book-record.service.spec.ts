import { TestBed } from '@angular/core/testing';

import { BookRecordService } from './book-record.service';

describe('BookRecordService', () => {
  let service: BookRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
