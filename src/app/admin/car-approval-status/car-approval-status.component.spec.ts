import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarApprovalStatusComponent } from './car-approval-status.component';

describe('CarApprovalStatusComponent', () => {
  let component: CarApprovalStatusComponent;
  let fixture: ComponentFixture<CarApprovalStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarApprovalStatusComponent]
    });
    fixture = TestBed.createComponent(CarApprovalStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
