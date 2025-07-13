import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesViewMoreComponent } from './categories-view-more.component';

describe('CategoriesViewMoreComponent', () => {
  let component: CategoriesViewMoreComponent;
  let fixture: ComponentFixture<CategoriesViewMoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriesViewMoreComponent]
    });
    fixture = TestBed.createComponent(CategoriesViewMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
