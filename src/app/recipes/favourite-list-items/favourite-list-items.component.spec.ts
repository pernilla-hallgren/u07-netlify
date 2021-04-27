import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteListItemsComponent } from './favourite-list-items.component';

describe('FavouriteListItemsComponent', () => {
  let component: FavouriteListItemsComponent;
  let fixture: ComponentFixture<FavouriteListItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouriteListItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
