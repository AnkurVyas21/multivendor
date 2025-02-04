import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellOrBuycarsCardsComponent } from './sell-or-buycars-cards.component';

describe('SellOrBuycarsCardsComponent', () => {
  let component: SellOrBuycarsCardsComponent;
  let fixture: ComponentFixture<SellOrBuycarsCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellOrBuycarsCardsComponent]
    });
    fixture = TestBed.createComponent(SellOrBuycarsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
