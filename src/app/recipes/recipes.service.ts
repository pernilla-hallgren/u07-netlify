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

  // SEARCH RECIPE FROM API
  findRecipe(q: string, mealType = null, dietLabel = null, healthLabel = null): Observable<any[]> {
    const mealTypeString = mealType !== "" ? "&mealType=" + mealType : "";
    const dietLabelString = dietLabel !== "" ? "&dietLabels=" + dietLabel : "";
    const healthLabelString = healthLabel !== "" ? "&healthLabels=" + healthLabel : "";
    const query = q ? q : "";
 
    let url = `${this.apiUrl}app_id=${this.apiID}&app_key=${this.apiKey}&q=` + query + mealTypeString + dietLabelString + healthLabelString;

    return this.http.get<any[]>(url);
  };

  // GET RECIPE BY ID
  getRecipeById(id: string): Observable<any[]> {
    let url = `${this.apiUrl}app_id=${this.apiID}&app_key=${this.apiKey}&r=`  
    console.log(url + encodeURIComponent(id)); 
    return this.http.get<any[]>(url + encodeURIComponent(id))
  };

}
