import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AuthInterceptorService } from "./auth/auth-interceptor.service";
import { RecipeService } from "./recipes/recipe.service";
import { ShoppingListService } from "./shopping-list/shopping-list.service";
import { LoggingService } from "./logging.service";

@NgModule({
  providers: [ //* import the services in angular or you can add 'providedIn: 'root''
    // ShoppingListService, //! these are not needed, but for demo purposes
    // RecipeService, 
    { //* this is the authinterceptorservice used andhow to provided it
      provide: HTTP_INTERCEPTORS, 
      useClass: AuthInterceptorService, 
      multi: true
    },
    //LoggingService
  ]
})
export class CoreModule {

}