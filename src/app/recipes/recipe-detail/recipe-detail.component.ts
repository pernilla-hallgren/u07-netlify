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
    private router: Router,
  ) { }

  ngOnInit(): void {
      this.route.paramMap.subscribe(paramMap => { 
        const id = paramMap.get('id') 
        this.recipesService.getRecipeById(id) 
          .subscribe(data => {
            this.recipe = data[0] 
        console.log(data);
      });
    });
  };

  addToFavourites(recipe) {
    this.recipesService.addToFavourites(recipe);
  };

}
