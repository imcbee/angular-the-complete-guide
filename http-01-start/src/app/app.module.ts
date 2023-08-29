import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthInterceptorService } from './auth.-interceptor.service';
import { LoggingInceptorService } from './logging-inceptor.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [ //! order of the inceptors really does matter
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: AuthInterceptorService, 
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: LoggingInceptorService, 
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
