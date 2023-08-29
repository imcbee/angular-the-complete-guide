import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";

import { Observable } from "rxjs";
import { DataStorageService } from "../shared/data-storage.service";
import { Recipe } from "./recipe.model";
import { RecipeService } from "./recipe.service";

@Injectable({providedIn: 'root'})
export class RecipeResolverService implements Resolve<Recipe[]> {
    constructor(
        private dataStorageServicer: DataStorageService,
        private receipeService: RecipeService
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Recipe[] | Observable<Recipe[]> | Promise<Recipe[]> {
        const recipes = this.receipeService.getRecipes();

        if (recipes.length === 0) {
            return this.dataStorageServicer.fetchRecipes();
        } else {
            return recipes;
        }
    }
}