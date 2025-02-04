import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopByBrandComponent } from './shop-by-brand.component';

describe('ShopByBrandComponent', () => {
  let component: ShopByBrandComponent;
  let fixture: ComponentFixture<ShopByBrandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopByBrandComponent]
    });
    fixture = TestBed.createComponent(ShopByBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
