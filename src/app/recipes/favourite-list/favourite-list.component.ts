import { Component, OnInit } from '@angular/core';

import { RecipesService } from '../recipes.service';


@Component({
  selector: 'app-favourite-list',
  templateUrl: './favourite-list.component.html',
  styleUrls: ['./favourite-list.component.css']
})
export class FavouriteListComponent implements OnInit {

  items = this.recipesService.getFavourites();

  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
    
  }

  deleteOneFavourite(item) {
    this.recipesService.deleteOne(item);
  };

  clearFavourites() {
    this.recipesService.clearFavouriteList();
    this.items = this.recipesService.getFavourites();
  };

}
