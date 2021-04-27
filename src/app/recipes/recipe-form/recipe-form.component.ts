import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { RecipesService } from '../recipes.service';


@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {

  @ViewChild('recipeForms') recipeForm: NgForm;

  RecipeForm: RecipeForm;

  querystring: string;
  mealType: string;
  dietLabel: string;
  healthLabel: string;
  
  results;

  constructor(private recipesService: RecipesService) { }

  onSubmit(form) {
    this.results = this.recipesService.findRecipe(form.value.querystring, form.value.mealType, form.value.dietLabel, form.value.healthLabel);
  };

  ngOnInit(): void {
    
  }

}

export class RecipeForm {
  querystring: string;
  mealType: string;
}
