import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingCarsComponent } from './trending-cars.component';

describe('TrendingCarsComponent', () => {
  let component: TrendingCarsComponent;
  let fixture: ComponentFixture<TrendingCarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrendingCarsComponent]
    });
    fixture = TestBed.createComponent(TrendingCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
