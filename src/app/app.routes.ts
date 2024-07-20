import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PopularComponent } from './pages/popular/popular.component';
import { TopRateComponent } from './pages/top-rate/top-rate.component';
import { UpcomingComponent } from './pages/upcoming/upcoming.component';
import { NowPlayingComponent } from './pages/now-playing/now-playing.component';
import { WatchlistComponent } from './components/watchlist/watchlist.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { SingleFilmComponent } from './pages/single-film/single-film/single-film.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'popular', component: PopularComponent },
  { path: 'login', component: LoginComponent },
  { path: 'top-rate', component: TopRateComponent },
  { path: 'upcoming', component: UpcomingComponent },
  { path: 'now-playing', component: NowPlayingComponent },
  { path: 'current-film/:id', component: SingleFilmComponent },
  { path: 'watch-list', component: WatchlistComponent, outlet: 'additional' },
  { path: 'favourite', component: FavoritesComponent, outlet: 'additional' },
];
