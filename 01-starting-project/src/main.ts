import { enableProdMode } from '@angular/core';

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { AnalyticsService } from './app/shared/analytics.service';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, //{
  //providers: [AnalyticsService] //! this is like having a providers array in app.module
//}
);
