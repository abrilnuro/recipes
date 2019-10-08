import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../../shared/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipeList: Recipe[] = [];
  @Output() selectedItem = new EventEmitter<number>();
  recipeListSize: number = 0;

  constructor(private recipeService: RecipeService) {
    //this.recipeService.populateList();
  }

  ngOnInit() {
    this.recipeListSize = this.recipeService.getRecipeListSize();
    if (this.recipeListSize !== 0) {
      this.recipeList = this.recipeService.getRecipeList();
    }
  }

  onClickItem(index: number) {
    this.selectedItem.emit(index);
  }

}
