import { Ingredients } from "../shared/ingredient.model";

export class Recipe {
  public name: String;
  public description: String;
  public imagePath: String;
  public ingredients: Ingredients[];

  constructor(name: String, desc: String, imagePath: String, ingredients: Ingredients[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
