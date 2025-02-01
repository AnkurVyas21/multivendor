import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferPriceComponent } from './offer-price.component';

describe('OfferPriceComponent', () => {
  let component: OfferPriceComponent;
  let fixture: ComponentFixture<OfferPriceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfferPriceComponent]
    });
    fixture = TestBed.createComponent(OfferPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
