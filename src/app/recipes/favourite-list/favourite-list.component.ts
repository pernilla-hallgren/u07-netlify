import { Component, OnInit } from '@angular/core';
import { FavouriteListService } from './favourite-list.service';


@Component({
  selector: 'app-favourite-list',
  templateUrl: './favourite-list.component.html',
  styleUrls: ['./favourite-list.component.css']
})
export class FavouriteListComponent implements OnInit {

  // items = this.recipesService.getFavourites();

  constructor(
    private favouriteListService: FavouriteListService) { }

  results;

  ngOnInit(): void {
    this.results = this.favouriteListService.favouriteLists
  }

  onSubmit(form) {
    this.favouriteListService.addFavouriteList(form.value.name);
    // this.results.subscribe(data => console.log(data));
  };

  deleteFavouriteList(id: number) {
    this.favouriteListService.deleteFavouriteList(id);
  }
  
  updateFavouriteList(id: number, name: string) {
    this.favouriteListService.updateFavouriteList(id, name);
  }



  // deleteOneFavourite(item) {
  //   this.recipesService.deleteOne(item);
  // };

  // clearFavourites() {
  //   this.recipesService.clearFavouriteList();
  //   this.items = this.recipesService.getFavourites();
  // };

}
