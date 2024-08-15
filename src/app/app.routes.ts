import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'popular',
    loadComponent: () =>
      import('./pages/popular/popular.component').then((m) => m.PopularComponent),
  },
  {
    path: 'top-rate',
    loadComponent: () =>
      import('./pages/top-rate/top-rate.component').then((m) => m.TopRateComponent),
  },
  {
    path: 'upcoming',
    loadComponent: () =>
      import('./pages/upcoming/upcoming.component').then((m) => m.UpcomingComponent),
  },
  {
    path: 'now-playing',
    loadComponent: () =>
      import('./pages/now-playing/now-playing.component').then((m) => m.NowPlayingComponent),
  },
  {
    path: 'current-film/:id',
    loadComponent: () =>
      import('./pages/single-film/single-film/single-film.component').then(
        (m) => m.SingleFilmComponent,
      ),
  },
  {
    path: 'watchlist',
    loadComponent: () =>
      import('./components/watchlist/watchlist.component').then((m) => m.WatchlistComponent),
    canActivate: [authGuard],
  },
  {
    path: 'favorite',
    loadComponent: () =>
      import('./components/favorites/favorites.component').then((m) => m.FavoritesComponent),
    canActivate: [authGuard],
  },
];
