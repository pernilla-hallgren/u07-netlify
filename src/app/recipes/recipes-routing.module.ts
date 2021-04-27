import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouriteListDetailsComponent } from './favourite-list-details/favourite-list-details.component';
import { FavouriteListItemsComponent } from './favourite-list-items/favourite-list-items.component';

import { FavouriteListComponent } from './favourite-list/favourite-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';

const routes: Routes = [
  { path: 'recipe-search', component: RecipeFormComponent },
  { path: 'recipe-detail/:id', component: RecipeDetailComponent },
  { path: 'favourite-recipes', component: FavouriteListComponent },
  { path: 'favourite-list/:id', component: FavouriteListDetailsComponent },
  { path: 'favourite-list-items/:id', component: FavouriteListItemsComponent }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
