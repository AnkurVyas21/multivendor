import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorCarDetailComponent } from './vendor-car-detail.component';

describe('VendorCarDetailComponent', () => {
  let component: VendorCarDetailComponent;
  let fixture: ComponentFixture<VendorCarDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorCarDetailComponent]
    });
    fixture = TestBed.createComponent(VendorCarDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
