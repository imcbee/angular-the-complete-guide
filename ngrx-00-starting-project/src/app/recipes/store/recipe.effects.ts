import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap, withLatestFrom } from "rxjs";
import * as RecipeActions from './recipe.actions';

import { Recipe } from "../recipe.model";
import { Store } from "@ngrx/store";
import * as fromApp from '../../store/app.reducer';

@Injectable()
export class RecipeEffects {
  
  fetchRecipes = createEffect(() => this.actions$.pipe(
    ofType(RecipeActions.FETCH_RECIPES),
    switchMap(fetchAction => {
      return this.http
        .get<Recipe[]>(
          'https://angular-test-fd57f-default-rtdb.firebaseio.com/recipes.json'
        )
    }),
    map(recipes => {
      return recipes.map(recipe => {
        return {
          ...recipe,
          ingredients: recipe.ingredients ? recipe.ingredients : []
        };
      });
    }),
    map(recipes => {
      return new RecipeActions.SetRecipes(recipes);
    })
  ));

  storeRecipes = createEffect(() => this.actions$.pipe(
    ofType(RecipeActions.STORE_RECIPES),
    withLatestFrom(this.store.select('recipes')),
    switchMap(([actionData, recipesState]) => { //! this is array destructing
      this.http
      .put(
        'https://angular-test-fd57f-default-rtdb.firebaseio.com/recipes.json',
        recipesState.recipes
      )
    })
  ));

  constructor(private actions$: Actions,
              private http: HttpClient,
              private store: Store<fromApp.AppState>) { }
}