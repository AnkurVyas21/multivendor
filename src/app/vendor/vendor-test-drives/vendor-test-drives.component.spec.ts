import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorTestDrivesComponent } from './vendor-test-drives.component';

describe('VendorTestDrivesComponent', () => {
  let component: VendorTestDrivesComponent;
  let fixture: ComponentFixture<VendorTestDrivesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorTestDrivesComponent]
    });
    fixture = TestBed.createComponent(VendorTestDrivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
