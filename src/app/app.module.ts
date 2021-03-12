import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './basics/page-not-found/page-not-found.component';
import { HomeComponent } from './basics/home/home.component';
import { BasicsModule } from './basics/basics.module';
import { FavouriteListComponent } from './favourite-recipes/favourite-list/favourite-list.component';
import { FavouriteListModule } from './favourite-recipes/favourite-list.module';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipeFormComponent } from './recipes/recipe-form/recipe-form.component';
import { RecipesModule } from './recipes/recipes.module';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    FavouriteListComponent,
    RecipeDetailComponent,
    RecipesListComponent,
    RecipeFormComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BasicsModule,
    FavouriteListModule,
    RecipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
