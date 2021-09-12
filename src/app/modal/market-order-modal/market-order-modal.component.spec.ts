import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketOrderModalComponent } from './market-order-modal.component';

describe('NotificationModalComponent', () => {
  let component: MarketOrderModalComponent;
  let fixture: ComponentFixture<MarketOrderModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketOrderModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketOrderModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
