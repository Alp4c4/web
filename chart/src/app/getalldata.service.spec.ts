import { TestBed } from '@angular/core/testing';

import { GetalldataService } from './getalldata.service';

describe('GetalldataService', () => {
  let service: GetalldataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetalldataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
