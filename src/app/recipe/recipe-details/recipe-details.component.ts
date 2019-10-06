import { Component, OnInit, Input, Output } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';
import { RecipeService } from '../recipe.service';
import { Ingredient } from '../../shared/ingredient.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { IngredientsService } from 'src/app/shared/ingredents.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  @Input() recipe: Recipe;
  ingredientsList: Ingredient[];


  constructor(private recipeService: RecipeService,
              private ingredientsService: IngredientsService,
              private router: Router) {}

  ngOnInit() {
    this.recipe = this.recipeService.getRecipeByIndex(0);
    this.ingredientsList = this.recipe.getIngredients();
  }

  showShopingList() {
    this.ingredientsService.addIngredients(this.ingredientsList);
    this.router.navigate(['/shopping-list']);
  }

}
