import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorSoldCarsComponent } from './vendor-sold-cars.component';

describe('VendorSoldCarsComponent', () => {
  let component: VendorSoldCarsComponent;
  let fixture: ComponentFixture<VendorSoldCarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorSoldCarsComponent]
    });
    fixture = TestBed.createComponent(VendorSoldCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
