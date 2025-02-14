import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorAddCarComponent } from './vendor-add-car.component';

describe('VendorAddCarComponent', () => {
  let component: VendorAddCarComponent;
  let fixture: ComponentFixture<VendorAddCarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorAddCarComponent]
    });
    fixture = TestBed.createComponent(VendorAddCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
