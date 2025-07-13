import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandViewMoreComponent } from './brand-view-more.component';

describe('BrandViewMoreComponent', () => {
  let component: BrandViewMoreComponent;
  let fixture: ComponentFixture<BrandViewMoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrandViewMoreComponent]
    });
    fixture = TestBed.createComponent(BrandViewMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
