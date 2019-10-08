import { Recipe } from '../shared/recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    private recipeList: Recipe[] = [];

    populateList() {
        const steps = ['step 1', 'step 2', 'step 3'];

        const ingredient1 = new Ingredient('ingredient1', 10, '../../../assets/img/apple.png', 'oz');
        const ingredient2 = new Ingredient('ingredient2', 20, '../../../assets/img/chef.png', 'oz');
        const ingredient3 = new Ingredient('ingredient3', 30, '../../../assets/img/fish.png', 'oz');

        const ingredientList = [];
        ingredientList.push(ingredient1);
        ingredientList.push(ingredient2);
        ingredientList.push(ingredient3);

        const recipe1 = new Recipe('Soup', '../../../assets/img/lasagna.jpg', ingredientList, steps);
        const recipe2 = new Recipe('Cake', '../../../assets/img/lasagna.jpg', ingredientList, steps);
        const recipe3 = new Recipe('Pizza', '../../../assets/img/lasagna.jpg', ingredientList, steps);

        this.recipeList.push(recipe1);
        this.recipeList.push(recipe2);
        this.recipeList.push(recipe3);
    }

    addRecipe(recipe: Recipe) {
        this.recipeList.push(recipe);
    }

    getRecipeByIndex(index: number): Recipe {
        return this.recipeList[index];
    }

    getRecipeList(): Recipe[] {
        return this.recipeList;
    }

    getRecipeListSize(): number {
        return this.recipeList.length;
    }
}
