import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Hamburger',
      'Make a hamburger',
      'https://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/1:1/w_1920,c_limit/the-ultimate-hamburger.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Lettuce', 2),
        new Ingredient('Tomato', 1),
        new Ingredient('Mustard', 1),
        new Ingredient('Pickles', 3),
      ]
    ),
    new Recipe(
      'French Fries',
      'Make a french fry',
      'https://www.allrecipes.com/thmb/JZsbJ8XNPxkbDk_hwHz-KI7nSKk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/219634-chef-johns-french-fries-DDMFS-4x3-338dec7976fc4d75bb3e2c18ff6a6e95.jpg',
      [
        new Ingredient('Potatoes', 4),
        new Ingredient('Salt', 1),
        new Ingredient('Oil', 1),
      ]
    ),
    new Recipe(
      'Milkshake',
      'make a milkshake',
      'https://preppykitchen.com/wp-content/uploads/2021/04/Milkshake-Recipe-Card.jpg',
      [
        new Ingredient('Milk', 1),
        new Ingredient('Icecream', 1),
      ]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(newRecipe: Recipe, index: number) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
