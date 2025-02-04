import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreOurCarsComponent } from './explore-our-cars.component';

describe('ExploreOurCarsComponent', () => {
  let component: ExploreOurCarsComponent;
  let fixture: ComponentFixture<ExploreOurCarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExploreOurCarsComponent]
    });
    fixture = TestBed.createComponent(ExploreOurCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
