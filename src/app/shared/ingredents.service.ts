import { Ingredient } from './ingredient.model';

export class IngredientsService {
    private ingredientsList: Ingredient[] = [];

    addIngredients(list: Ingredient[]) {
        this.ingredientsList = this.ingredientsList.concat(list);
    }

    getIngredients(): Ingredient[] {
        return this.ingredientsList;
    }
}
