import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteListDetailsComponent } from './favourite-list-details.component';

describe('FavouriteListDetailsComponent', () => {
  let component: FavouriteListDetailsComponent;
  let fixture: ComponentFixture<FavouriteListDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouriteListDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
