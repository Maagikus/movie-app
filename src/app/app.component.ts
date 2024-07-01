import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['../assets/styles/styles.scss', './app.component.scss'],
  imports: [RouterOutlet, MovieListComponent, NavbarComponent, HeaderComponent, RouterLink],
})
export class AppComponent {
  sidebarVisible: boolean = false;
  onOpenSideBar(value: boolean) {
    this.sidebarVisible = value;
  }
  onCloseSidebar(value: boolean) {
    this.sidebarVisible = value;
  }
}
