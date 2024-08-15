import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { WatchlistComponent } from './components/watchlist/watchlist.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { MovieService } from './services/movie.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { Store } from '@ngrx/store';
import { loadSubscriptionFromLocalStorage } from './store/actions/movie.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['../assets/styles/styles.scss', './app.component.scss'],
  imports: [
    RouterOutlet,
    MovieListComponent,
    NavbarComponent,
    HeaderComponent,
    RouterLink,
    WatchlistComponent,
    FavoritesComponent,
    HttpClientModule,
    DynamicDialogModule,
  ],
  providers: [MovieService, AuthService],
})
export class AppComponent {
  constructor(
    private authService: AuthService,
    private store: Store,
  ) {}
  sidebarVisible: boolean = false;
  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
  ngOnInit() {
    this.authService.initializeUser();
    this.store.dispatch(loadSubscriptionFromLocalStorage());
  }
}
