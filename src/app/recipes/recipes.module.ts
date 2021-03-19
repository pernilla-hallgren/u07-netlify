import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { FavouriteListComponent } from './favourite-list/favourite-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

import { RecipesRoutingModule } from './recipes-routing.module';

@NgModule({
  declarations: [
    RecipeDetailComponent,
    RecipeFormComponent,
    FavouriteListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RecipesRoutingModule
  ]
})
export class RecipesModule { }
