import { TestBed } from '@angular/core/testing';

import { FavouriteListItemsService } from './favourite-list-items.service';

describe('FavouriteListItemsService', () => {
  let service: FavouriteListItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavouriteListItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
