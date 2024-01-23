import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./contacts/features/contact-shell/contact-shell.routes'),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
