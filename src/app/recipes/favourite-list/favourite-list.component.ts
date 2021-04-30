import { Component, OnInit } from '@angular/core';
import { FavouriteListService } from './favourite-list.service';


@Component({
  selector: 'app-favourite-list',
  templateUrl: './favourite-list.component.html',
  styleUrls: ['./favourite-list.component.css']
})
export class FavouriteListComponent implements OnInit {

  constructor(
    private favouriteListService: FavouriteListService) { }

  results;

  ngOnInit(): void {
    this.results = this.favouriteListService.favouriteLists
  }

  onSubmit(form) {
    this.favouriteListService.addFavouriteList(form.value.name);
  };

  deleteFavouriteList(id: number) {
    this.favouriteListService.deleteFavouriteList(id);
  }
  
  updateFavouriteList(id: number, name: string) {
    this.favouriteListService.updateFavouriteList(id, name);
  }

}
