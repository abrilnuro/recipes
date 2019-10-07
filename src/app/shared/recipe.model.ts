import { Ingredient } from './ingredient.model';

export class Recipe {
    private name: string;
    private image: string;
    private ingredientList: Ingredient[];
    private steps: string[];

    constructor(name: string, image: string, ingredientList: Ingredient[], steps: string[]) {
        this.name = name;
        this.image = image;
        this.ingredientList = ingredientList;
        this.steps = steps;
    }

    setName(name: string) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setImage(image: string) {
        this.image = image;
    }

    getImage() {
        return this.image;
    }

    setIngredients(ingredientList: Ingredient[]) {
        this.ingredientList = ingredientList;
    }

    getIngredients(): Ingredient[] {
        return this.ingredientList;
    }

    setSteps(steps: string[]) {
        this.steps = steps;
    }

    getSteps() {
        return this.steps;
    }
}

