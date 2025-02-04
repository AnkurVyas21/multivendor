import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlyAddedCarsComponent } from './recently-added-cars.component';

describe('RecentlyAddedCarsComponent', () => {
  let component: RecentlyAddedCarsComponent;
  let fixture: ComponentFixture<RecentlyAddedCarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecentlyAddedCarsComponent]
    });
    fixture = TestBed.createComponent(RecentlyAddedCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
