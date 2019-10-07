import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Recipe } from '../shared/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { RecipeService } from '../recipe/recipe.service';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.css']
})
export class RecipeAddComponent implements OnInit {
  @ViewChild('newRecipeName', {static: false}) newRecipeName: ElementRef;
  @ViewChild('newRecipeImage', {static: false}) newRecipeImage: ElementRef;
  @ViewChild('newRecipetStep', {static: false}) newRecipetStep: ElementRef;
  @ViewChild('newRecipetIngredient', {static: false}) newRecipetIngredient: ElementRef;
  @ViewChild('newRecipetIngredientAmount', {static: false}) newRecipetIngredientAmount: ElementRef;
  stepsList: string[] = [];
  ingredientsList: Ingredient[] = [];
  nStep: number = 1;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  addStep() {
    this.stepsList.push(this.newRecipetStep.nativeElement.value);
    this.nStep = this.stepsList.length + 1;
    this.newRecipetStep.nativeElement.value = '';
  }

  deleteStep(stepIndex: number) {
    this.stepsList.splice(stepIndex, 1);
    this.nStep = this.stepsList.length + 1;
  }

  addIngredient() {
    const name = this.newRecipetIngredient.nativeElement.value;
    const amount = this.newRecipetIngredientAmount.nativeElement.value;
    const ingredient = new Ingredient(name, amount, '', '');
    this.ingredientsList.push(ingredient);

    this.newRecipetIngredient.nativeElement.value = '';
    this.newRecipetIngredientAmount.nativeElement.value = '';
  }

  deleteIngredient(ingredientIndex: number) {
    this.ingredientsList.splice(ingredientIndex, 1);
  }

  addRecipe() {
    const name = this.newRecipeName.nativeElement.value;
    const image = '';
    const recipe = new Recipe(name, image, this.ingredientsList, this.stepsList);
    this.recipeService.addRecipe(recipe);
  }
}
