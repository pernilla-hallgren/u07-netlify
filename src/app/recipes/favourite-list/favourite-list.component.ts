import { Component, OnInit } from '@angular/core';

import { RecipesService } from '../recipes.service';


@Component({
  selector: 'app-favourite-list',
  templateUrl: './favourite-list.component.html',
  styleUrls: ['./favourite-list.component.css']
})
export class FavouriteListComponent implements OnInit {

  // items = this.recipesService.getFavourites();

  constructor(private recipesService: RecipesService) { }

  results;

  ngOnInit(): void {
    
  }

  onSubmit(form) {
    this.results = this.recipesService.findRecipe(form.value.name);
    this.results.subscribe(data => console.log(data));
    console.log('Hej');
  };

  // deleteOneFavourite(item) {
  //   this.recipesService.deleteOne(item);
  // };

  // clearFavourites() {
  //   this.recipesService.clearFavouriteList();
  //   this.items = this.recipesService.getFavourites();
  // };

}
