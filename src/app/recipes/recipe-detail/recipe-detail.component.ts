import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { RecipesService } from '../recipes.service';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe;

  constructor(
    private recipesService: RecipesService, 
    private route: ActivatedRoute, 
    private router: Router
  ) { }

  ngOnInit(): void {
      this.route.paramMap.subscribe(paramMap => { // allt vi ha i uri:in ligger nu i paramMap
        const id = paramMap.get('id') 
        this.recipesService.getRecipeById(id) // vi kallar på recipe service för att hämta datan från uri
          .subscribe(data => {
            this.recipe = data[0] 
        console.log(data);
      })
    })
  }

  addToFavourites(recipe) {
    this.recipesService.addToFavourites(recipe);
    window.alert('Recipe has been added to your favourite list!');
  }


}
