import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { AuthComponent } from './auth/auth.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HeaderComponent } from './header/header.component';
import { RecipeService } from './recipes/recipe.service';
import { RecipesRoutingModule } from './recipes/recipes-routing.module';
import { RecipesModule } from './recipes/recipes.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { SharedModule } from './shared/shared.module';


//! if this is too big, you can split it up for performance
@NgModule({
  declarations: [ //* declare your components here
    AppComponent,
    HeaderComponent,
    AuthComponent,
    ErrorPageComponent,
  ],
  imports: [ //* importing other modules built in angular
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule, 
    HttpClientModule,
    AppRoutingModule, 
    RecipesModule,
    ShoppingListModule,
    SharedModule
  ],
  providers: [ //* import the services in angular or you can add 'providedIn: 'root''
    ShoppingListService, 
    RecipeService, 
    { //* this is the authinterceptorservice used andhow to provided it
      provide: HTTP_INTERCEPTORS, 
      useClass: AuthInterceptorService, 
      multi: true
    }
  ],
  bootstrap: [AppComponent], //* this starts your app
})
export class AppModule {}
