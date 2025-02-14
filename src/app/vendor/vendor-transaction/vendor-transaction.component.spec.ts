import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorTransactionComponent } from './vendor-transaction.component';

describe('VendorTransactionComponent', () => {
  let component: VendorTransactionComponent;
  let fixture: ComponentFixture<VendorTransactionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorTransactionComponent]
    });
    fixture = TestBed.createComponent(VendorTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
