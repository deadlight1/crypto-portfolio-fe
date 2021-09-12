import { TestBed } from '@angular/core/testing';

import { CountedOrderService } from './counted-order.service';

describe('CountedOrderService', () => {
  let service: CountedOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountedOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
