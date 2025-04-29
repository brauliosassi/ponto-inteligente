import { enebleProMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { enviroment } from './enviroments/enviroment';

import 'hammerjs';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err) => console.error(err));
