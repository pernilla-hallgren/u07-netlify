import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { FavouriteListService } from '../../recipes/favourite-list/favourite-list.service';
import { FavouriteListItemsService } from '../favourite-list-items/favourite-list-items.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe;
  lists;
  responseText = [];

  constructor(
    private recipesService: RecipesService, 
    private route: ActivatedRoute, 
    private favouriteListService: FavouriteListService,
    private favouriteListItemsService: FavouriteListItemsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
      this.lists = this.favouriteListService.favouriteLists
      console.log(this.lists);
      this.route.paramMap.subscribe(paramMap => { 
        const id = paramMap.get('id') 
        this.recipesService.getRecipeById(id) 
          .subscribe(data => {
            this.recipe = data[0] 
        console.log(data);
      });
    });
  };

  onSubmit(form) {
    // console.log(form.value);
    const arrayOfLists = [];
    for(let key in form.value) {
      console.log(form.value[key]);

    if(form.value[key] === true) arrayOfLists.push(key)     
    }
    console.log(arrayOfLists) 
    for(let i = 0; i < arrayOfLists.length; i++) {
      this.favouriteListItemsService.addItemToFavouriteList(
        arrayOfLists[i], 
        this.recipe.uri,
        this.recipe.image,
        this.recipe.label,
        this.recipe.ingredientLines.join(' ')
      )
      .subscribe((data: any) => {
        console.log(data);
        this.favouriteListService.getAllFavouriteLists();
        this.responseText.push(data.message);
      })
    }  
  }



}
