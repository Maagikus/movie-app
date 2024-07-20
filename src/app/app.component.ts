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
  ],
  providers: [MovieService, AuthService],
})
export class AppComponent {
  sidebarVisible: boolean = true;
  onOpenSideBar(value: boolean) {
    this.sidebarVisible = value;
  }
  onCloseSidebar(value: boolean) {
    this.sidebarVisible = value;
  }
}
