import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.log(err));

import { AppModuleNgFactory } from './app/app.module.ngfactory';
platformBrowserDynamic().bootstrapModuleFactory(AppModuleNgFactory, {ngZone: 'noop'}).catch(err => console.log(err));
