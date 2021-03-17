import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../environments/environment'; 
@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  items = [];

  apiUrl: string;
  apiKey: string;
  apiID: string;
  
  constructor(private http: HttpClient) { 
    this.apiUrl = environment.apiURL
    this.apiKey = environment.apiKey;
    this.apiID = environment.apiID;
  }


  // Get 1 recipe by id
  getRecipeById(id: string): Observable<any[]> {

    let url = `${this.apiUrl}app_id=${this.apiID}&app_key=${this.apiKey}&r=`  
    console.log(url + encodeURIComponent(id)); 
    return this.http.get<any[]>(url + encodeURIComponent(id))
  };

  // Add to My-Recipes List
  addToFavourites(recipe) {
    this.items.push(recipe);
  }

  getFavourites() {
    return this.items;
  }

  // tar bort ur listan på My-Recipecs list
  deleteOne(item) {
    // ta bort något ur en array när vi söker igenom den
    this.items.splice(this.items.indexOf(x => x.uri === item.uri), 1) 
    // hitta vilken position på den uri:n vi klickar på
  }

  clearFavouriteList() {
    this.items = [];
    console.log(this.items);
    // return this.items; 
  }

}
