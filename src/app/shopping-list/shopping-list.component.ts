import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { IngredientsService } from '../shared/ingredents.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredientList: Ingredient[];

  constructor(private ingredientsService: IngredientsService) {}

  ngOnInit() {
    this.ingredientList = this.ingredientsService.getIngredients();
  }

}
