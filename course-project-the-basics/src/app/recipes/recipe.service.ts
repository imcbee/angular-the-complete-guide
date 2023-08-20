import { EventEmitter, Injectable } from '@angular/core';
import { Ingredients } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Hamburger',
      'Make a hamburger',
      'https://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/1:1/w_1920,c_limit/the-ultimate-hamburger.jpg',
      [
        new Ingredients('Meat', 1),
        new Ingredients('Lettuce', 2),
        new Ingredients('Tomato', 1),
        new Ingredients('Mustard', 1),
        new Ingredients('Pickles', 3),
      ]
    ),
    new Recipe(
      'French Fries',
      'Make a french fry',
      'https://www.allrecipes.com/thmb/JZsbJ8XNPxkbDk_hwHz-KI7nSKk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/219634-chef-johns-french-fries-DDMFS-4x3-338dec7976fc4d75bb3e2c18ff6a6e95.jpg',
      [
        new Ingredients('Potatoes', 4),
        new Ingredients('Salt', 1),
        new Ingredients('Oil', 1),
      ]
    ),
    new Recipe(
      'Milkshake',
      'make a milkshake',
      'https://preppykitchen.com/wp-content/uploads/2021/04/Milkshake-Recipe-Card.jpg',
      [
        new Ingredients('Milk', 1),
        new Ingredients('Icecream', 1),
      ]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredients[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
