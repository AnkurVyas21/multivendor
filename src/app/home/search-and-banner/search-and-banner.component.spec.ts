import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAndBannerComponent } from './search-and-banner.component';

describe('SearchAndBannerComponent', () => {
  let component: SearchAndBannerComponent;
  let fixture: ComponentFixture<SearchAndBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchAndBannerComponent]
    });
    fixture = TestBed.createComponent(SearchAndBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
