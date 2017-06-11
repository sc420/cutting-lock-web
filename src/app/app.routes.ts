import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'auth', loadChildren: './+auth#AuthModule' },
  { path: 'dev', loadChildren: './+dev#DevModule' },
  { path: '404', component: NoContentComponent },
  { path: '**', redirectTo: '404' },
];
