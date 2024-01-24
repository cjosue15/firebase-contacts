import { ApplicationConfig } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { firebaseProviders } from './firebase.config';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withViewTransitions()), firebaseProviders],
};
