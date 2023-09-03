import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule)},
  { path: 'shopping-list', loadChildren: () => import('./shopping-list/shopping-list.module').then(m => m.ShoppingListModule)},
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  // { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],  //* how to use RouterModule, add to app and export it for use
  exports: [RouterModule]
})
export class AppRoutingModule {} //* this is outsourced app-routing to separate concerns
