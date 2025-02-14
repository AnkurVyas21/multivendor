import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorCarListComponent } from './vendor-car-list.component';

describe('VendorCarListComponent', () => {
  let component: VendorCarListComponent;
  let fixture: ComponentFixture<VendorCarListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorCarListComponent]
    });
    fixture = TestBed.createComponent(VendorCarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
