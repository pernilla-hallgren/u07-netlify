import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface ApiResponce {
  data: any[]
}

@Injectable({
  providedIn: 'root'
})
export class FavouriteListService {

  private favouriteListSubject: BehaviorSubject <any[]>
  public favouriteLists: Observable <any[]>

  constructor(
    private http: HttpClient,
    private router: Router  
    ) { 
        this.favouriteListSubject = new BehaviorSubject <any[]> ([]);
        this.favouriteLists = this.favouriteListSubject.asObservable()
      }
    
  public get favouriteListsValue(): any[] {
    return this.favouriteListSubject.value
  }    

  public set favouriteListSubjectValue(value: any) {
    this.favouriteListSubject.next(value);
  }

  addFavouriteList(name: string) {
    return this.http.post('https://u08-recipe-api-backend.herokuapp.com/api/auth/favourite-lists', {name: name})
      .subscribe(data => {
      this.getAllFavouriteLists();
    })
  }

  getAllFavouriteLists() {
    return this.http.get('https://u08-recipe-api-backend.herokuapp.com/api/auth/favourite-lists').subscribe((data: ApiResponce)  => {
      this.favouriteListSubject.next(data.data)
    })
  }

  deleteFavouriteList(id: number) {
    return this.http.delete('https://u08-recipe-api-backend.herokuapp.com/api/auth/favourite-lists/' + id).subscribe(data => {
      this.getAllFavouriteLists();
    })
  }

  updateFavouriteList(id: number, name: string) {
    return this.http.put('https://u08-recipe-api-backend.herokuapp.com/api/auth/favourite-lists/' + id, {name: name}).subscribe(data => {
      this.getAllFavouriteLists();
      this.router.navigate(['/favourite-recipes']);
    })
  }

  getFavouriteListById(id: string) {
     return this.http.get('https://u08-recipe-api-backend.herokuapp.com/api/auth/favourite-lists/' + id)
  }

}
