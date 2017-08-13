import { ShoppingService } from './../shopping-list/shopping.service';
import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    recipes: Recipe[] = [
    new Recipe('Trial Recipe', 'Blah blah blah blah.....', 'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-superJumbo.jpg',[new Ingredient ('Meat', 2), new Ingredient ('Pork', 1)]),
    new Recipe('Second Trial Recipe', 'Blah blah blah blah.....', 'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg',[new Ingredient ('Bun', 4), new Ingredient ('Sauce', 1)])
  ]

  constructor(private shoppingService: ShoppingService){}

  getRecipes(){
      return this.recipes.slice();
  }

  addIngredientsFromRecipeToShoppingList(ingredients: Ingredient[]){
        this.shoppingService.addIngredients(ingredients);
  }

}