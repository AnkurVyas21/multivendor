import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteFeaturesCardsComponent } from './website-features-cards.component';

describe('WebsiteFeaturesCardsComponent', () => {
  let component: WebsiteFeaturesCardsComponent;
  let fixture: ComponentFixture<WebsiteFeaturesCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebsiteFeaturesCardsComponent]
    });
    fixture = TestBed.createComponent(WebsiteFeaturesCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
