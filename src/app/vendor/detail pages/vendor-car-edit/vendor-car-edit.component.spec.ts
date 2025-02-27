import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorCarEditComponent } from './vendor-car-edit.component';

describe('VendorCarEditComponent', () => {
  let component: VendorCarEditComponent;
  let fixture: ComponentFixture<VendorCarEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorCarEditComponent]
    });
    fixture = TestBed.createComponent(VendorCarEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
