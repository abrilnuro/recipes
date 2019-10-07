import { Ingredient } from './ingredient.model';

export class IngredientsService {
    private ingredientsList: Ingredient[] = [];

    addIngredients(list: Ingredient[]) {
        const newIngredients = [];

        if (this.ingredientsList.length === 0) {
            this.ingredientsList = this.ingredientsList.concat(list);
        } else {
            this.ingredientsList.forEach((e1) =>
                list.forEach((e2) => {
                    if (e1.getName().toLowerCase() === e2.getName().toLowerCase()) {
                        e1.setAmount(e1.getAmount() + 1);
                    } else {
                        newIngredients.push(e2);
                    }
                    this.ingredientsList.concat(newIngredients);
                }
            ));
        }
        console.log(this.ingredientsList);
    }

    getIngredients(): Ingredient[] {
        return this.ingredientsList;
    }
}
