import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';


import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeListItemComponent } from './recipe/recipe-list/recipe-list-item/recipe-list-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HeaderComponent } from './header/header.component';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';
import { RecipeDetailsIngredientComponent } from './recipe/recipe-details/recipe-details-ingredient/recipe-details-ingredient.component';
import { RecipeService } from './recipe/recipe.service';
import { RecipeItemDirective } from './recipe/recipe-item.directive';
import { IngredientsService } from './shared/ingredents.service';
import { RecipeAddComponent } from './recipe-add/recipe-add.component';
import { StoreComponent } from './store/store.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  {path: '', component: RecipeComponent},
  {path: 'recipe', component: RecipeComponent},
  {path: 'recipe-new', component: RecipeAddComponent},
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: 'store', component: StoreComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeListItemComponent,
    ShoppingListComponent,
    HeaderComponent,
    RecipeDetailsComponent,
    RecipeDetailsIngredientComponent,
    RecipeItemDirective,
    RecipeAddComponent,
    StoreComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule
  ],
  providers: [
    RecipeService,
    IngredientsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
