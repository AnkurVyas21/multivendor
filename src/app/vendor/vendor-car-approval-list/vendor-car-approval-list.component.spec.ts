import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorCarApprovalListComponent } from './vendor-car-approval-list.component';

describe('VendorCarApprovalListComponent', () => {
  let component: VendorCarApprovalListComponent;
  let fixture: ComponentFixture<VendorCarApprovalListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorCarApprovalListComponent]
    });
    fixture = TestBed.createComponent(VendorCarApprovalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
