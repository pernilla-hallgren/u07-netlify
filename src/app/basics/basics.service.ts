import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class BasicsService {

  public query: string; 
  apiUrl: string;
  apiKey: string;
  apiID: string;
  
  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiURL
    this.apiKey = environment.apiKey;
    this.apiID = environment.apiID;
   }

  getRecipes(): Observable<any[]> {

    // Lägg in nya queris för bättre bilder
    this.query = '&q=vegetables&dishType=salad';

    let url = `${this.apiUrl}app_id=${this.apiID}&app_key=${this.apiKey}` + this.query;

    // https://api.edamam.com/search?app_id=c8d05210&app_key=8ed4234bb2495dc0641253fd5bb89677&q=sausage&dishType=dessert
    return this.http.get<any[]>(url);

  };
}
