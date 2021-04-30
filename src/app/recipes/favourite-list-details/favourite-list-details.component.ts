import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FavouriteListService } from '../favourite-list/favourite-list.service';

@Component({
  selector: 'app-favourite-list-details',
  templateUrl: './favourite-list-details.component.html',
  styleUrls: ['./favourite-list-details.component.css']
})
export class FavouriteListDetailsComponent implements OnInit {

  data;

  constructor(
    private favouriteListService: FavouriteListService,
    private route: ActivatedRoute, 
    private router: Router,
    ) { }

  ngOnInit(): void {
      this.route.paramMap.subscribe(paramMap => { 
        const id = paramMap.get('id') 
        this.favouriteListService.getFavouriteListById(id) 
          .subscribe((data: any) => {
            this.data = data
            console.log(data);
      });
    });
  };

  onSubmit(form) {
    this.favouriteListService.updateFavouriteList(this.data.favouriteList.id, form.value.name);
  }

}
