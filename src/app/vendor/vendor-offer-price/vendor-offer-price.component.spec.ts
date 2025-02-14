import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorOfferPriceComponent } from './vendor-offer-price.component';

describe('VendorOfferPriceComponent', () => {
  let component: VendorOfferPriceComponent;
  let fixture: ComponentFixture<VendorOfferPriceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorOfferPriceComponent]
    });
    fixture = TestBed.createComponent(VendorOfferPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
