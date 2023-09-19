import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderConformationComponent } from './order-conformation.component';

describe('OrderConformationComponent', () => {
  let component: OrderConformationComponent;
  let fixture: ComponentFixture<OrderConformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderConformationComponent]
    });
    fixture = TestBed.createComponent(OrderConformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
