import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreAllCarsComponent } from './explore-all-cars.component';

describe('ExploreAllCarsComponent', () => {
  let component: ExploreAllCarsComponent;
  let fixture: ComponentFixture<ExploreAllCarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExploreAllCarsComponent]
    });
    fixture = TestBed.createComponent(ExploreAllCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
