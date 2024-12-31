import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoldcarsComponent } from './soldcars.component';

describe('SoldcarsComponent', () => {
  let component: SoldcarsComponent;
  let fixture: ComponentFixture<SoldcarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoldcarsComponent]
    });
    fixture = TestBed.createComponent(SoldcarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
