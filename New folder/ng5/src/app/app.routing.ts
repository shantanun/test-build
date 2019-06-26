/**
 * Core angular modules
 */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * Root app routes to load child modules lazily - here we have to load only one child module
 */
const routes: Routes = [
  { path: '', redirectTo: 'rate-list', pathMatch: 'full' },
  // { path: 'rate-list', loadChildren: '../modules/rate-list.module#RateListModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
