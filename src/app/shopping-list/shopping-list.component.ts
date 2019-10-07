import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { IngredientsService } from '../shared/ingredents.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredientList: Ingredient[];
  @ViewChild('ingredientName', {static: false}) ingredientName: ElementRef;
  @ViewChild('ingredientAmount', {static: false}) ingredientAmount: ElementRef;

  constructor(private ingredientsService: IngredientsService) {}

  ngOnInit() {
    this.ingredientList = this.ingredientsService.getIngredients();
  }

  addIngredients() {
    const name = this.ingredientName.nativeElement.value;
    const amount = this.ingredientAmount.nativeElement.value;
    const newIngredient = new Ingredient(name, amount, '', '');
    this.ingredientsService.addIngredient(newIngredient);
    this.ingredientList = this.ingredientsService.getIngredients();
  }

}
