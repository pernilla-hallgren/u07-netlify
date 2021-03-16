import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'; 
@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  apiUrl: string;
  apiKey: string;
  apiID: string;
  
  constructor() { 
    this.apiUrl = environment.apiURL
    this.apiKey = environment.apiKey;
    this.apiID = environment.apiID;
  }
}
