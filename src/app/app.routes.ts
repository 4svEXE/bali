import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-me', loadComponent: () => import('./pages/about-me/about-me.component').then(m => m.AboutMeComponent) },
  { path: 'favorites', loadComponent: () => import('./pages/favorites/favorites.component').then(m => m.FavoritesComponent) },

  { path: 'shop', loadChildren: () => import('./features/catalog/catalog.module').then(m => m.CatalogModule) },

  { path: '**', redirectTo: 'home', pathMatch: 'full' }
  // { path: 'me', loadComponent: () => import('./pages/me/me.component').then(m => m.MeComponent) },
];
