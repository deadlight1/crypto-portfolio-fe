import { TestBed } from '@angular/core/testing';

import { CountedOrderFormService } from './counted-order-form.service';

describe('CountedOrderFormService', () => {
  let service: CountedOrderFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountedOrderFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
