import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FavouriteListService } from '../favourite-list/favourite-list.service';

@Injectable({
  providedIn: 'root'
})
export class FavouriteListItemsService {

  constructor(
    private http: HttpClient,
    private favouriteListService: FavouriteListService,
    private router: Router
  ) { }


  addItemToFavouriteList(listId: string, recipeId: string, image: string, label: string, ingredients: string ) {
    return this.http.post('https://u08-recipe-api-backend.herokuapp.com/api/auth/favourite-list-items', {
      favourite_list_id: listId, 
      recipe_detail_id: recipeId,
      recipe_image: image,   
      recipe_label: label, 
      recipe_ingredientLines: ingredients
    })
  }

  getAllFavouriteListItems() {
    return this.http.get('https://u08-recipe-api-backend.herokuapp.com/api/auth/favourite-list-items').subscribe(data => {
      console.log(data);
      this.favouriteListService.getAllFavouriteLists();
    })
  }

  deleteFavouriteListItem(id: number) {
    return this.http.delete('https://u08-recipe-api-backend.herokuapp.com/api/auth/favourite-list-items/' + id)

  }

}
