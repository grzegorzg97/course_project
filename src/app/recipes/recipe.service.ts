import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService {

    recipes: Recipe[] = [
        new Recipe('A test recipe',
         'This is a test',
         'https://hips.hearstapps.com/hmg-prod/images/crepes-lead-64347419487e4.jpg?crop=0.9995238095238095xw:1xh;center,top&resize=980:*',
         [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
         ]),
        new Recipe('Another test recipe',
         'This is a test',
         'https://hips.hearstapps.com/hmg-prod/images/crepes-lead-64347419487e4.jpg?crop=0.9995238095238095xw:1xh;center,top&resize=980:*',
         [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1)
         ])
      ];

      constructor(private slService:ShoppingListService) { }
      

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index: number){
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}