import { Recipe } from '../shared/recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    private recipeList: Recipe[] = [];

    populateList() {
        const steps1 = 'Cook noodles according to package directions; drain. Meanwhile, in a Dutch oven, cook sausage';
        const steps2 = 'Stir in tomatoes, tomato paste, water, sugar, 3 tablespoons parsley, basil, fennel, 1/2 teaspoon';

        const ingredient1 = new Ingredient('ingredient1', 10, '../../../assets/img/apple.png', 'oz');
        const ingredient2 = new Ingredient('ingredient2', 20, '../../../assets/img/chef.png', 'oz');
        const ingredient3 = new Ingredient('ingredient3', 30, '../../../assets/img/fish.png', 'oz');

        const ingredientList = [];
        ingredientList.push(ingredient1);
        ingredientList.push(ingredient2);
        ingredientList.push(ingredient3);

        const recipe1 = new Recipe('Soup', '../../../assets/img/number_2.png', ingredientList, steps1);
        const recipe2 = new Recipe('Cake', '../../../assets/img/number_1.png', ingredientList, steps2);
        const recipe3 = new Recipe('Pizza', '../../../assets/img/cancel-button.png', ingredientList, steps1);

        this.recipeList.push(recipe1);
        this.recipeList.push(recipe2);
        this.recipeList.push(recipe3);
    }

    getRecipeByIndex(index: number): Recipe {
        return this.recipeList[index];
    }

    getRecipeList(): Recipe[] {
        return this.recipeList;
    }
}
