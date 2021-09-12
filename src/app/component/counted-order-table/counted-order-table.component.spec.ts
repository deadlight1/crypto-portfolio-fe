import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountedOrderTableComponent } from './counted-order-table.component';

describe('CountedOrderTableComponent', () => {
  let component: CountedOrderTableComponent;
  let fixture: ComponentFixture<CountedOrderTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountedOrderTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountedOrderTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
