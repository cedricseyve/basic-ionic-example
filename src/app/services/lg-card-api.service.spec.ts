import { TestBed } from '@angular/core/testing';

import { LgCardApiService } from './lg-card-api.service';

describe('LgCardApiService', () => {
  let service: LgCardApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LgCardApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
