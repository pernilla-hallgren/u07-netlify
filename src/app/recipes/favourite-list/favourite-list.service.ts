import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FavouriteListService {

  constructor(private http: HttpClient) { }

  addFavouriteList(name: string): Observable<any> {
    return this.http.post('http://127.0.0.1:80/api/auth/favourite-recipes', {name: name})//.subscribe(data => console.log(data));
  }


}
