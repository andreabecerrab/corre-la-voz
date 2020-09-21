import { TestBed } from '@angular/core/testing';

import { MarchaServiceService } from './marcha-service.service';

describe('MarchaServiceService', () => {
  let service:MarchaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarchaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
