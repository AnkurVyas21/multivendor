import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCarListComponent } from './search-car-list.component';

describe('SearchCarListComponent', () => {
  let component: SearchCarListComponent;
  let fixture: ComponentFixture<SearchCarListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchCarListComponent]
    });
    fixture = TestBed.createComponent(SearchCarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
