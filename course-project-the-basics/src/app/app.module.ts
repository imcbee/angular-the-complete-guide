import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core.module';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from './shared/shared.module';
import { LoggingService } from './logging.service';


//! if this is too big, you can split it up for performance
@NgModule({
  declarations: [ //* declare your components here
    AppComponent,
    HeaderComponent,
    //ErrorPageComponent,
  ],
  imports: [ //* importing other modules built in angular
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    CoreModule
  ],
  bootstrap: [AppComponent], //* this starts your app
  //providers: [LoggingService] //! Always use provideIn root for services usually
})
export class AppModule {}
