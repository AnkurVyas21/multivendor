import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorProfileImageComponent } from './vendor-profile-image.component';

describe('VendorProfileImageComponent', () => {
  let component: VendorProfileImageComponent;
  let fixture: ComponentFixture<VendorProfileImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorProfileImageComponent]
    });
    fixture = TestBed.createComponent(VendorProfileImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
