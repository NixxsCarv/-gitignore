import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// Registra o idioma português para que o pipe currency formate em reais (R$ 1.234,56)
registerLocaleData(localePt);

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
