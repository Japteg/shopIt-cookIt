import { EventEmitter } from '@angular/core';
import { Ingredient } from './../shared/ingredient.model';

export class ShoppingService {

    ingredientAdded = new EventEmitter<Ingredient[]>();

    ingredients : Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoe', 10)
  ];

  getIngredients(){
      return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientAdded.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientAdded.emit(this.ingredients.slice());
  }

}