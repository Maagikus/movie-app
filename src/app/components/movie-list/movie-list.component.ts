import { Component } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { CommonModule } from '@angular/common';
import { movies } from 'mock-data';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, MovieCardComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
})
export class MovieListComponent {
  movieList: Movie[] = movies;
  favoriteList: Movie[] = [];
  watchList: Movie[] = [];
  onAddToFavorites(id: number) {
    const movie = this.movieList.find((movie: Movie) => movie.id === id);
    if (movie && !this.favoriteList.includes(movie)) {
      this.favoriteList = [...this.favoriteList, movie];
    }
  }
  onAddToWatchList(id: number) {
    const movie = this.movieList.find((movie: Movie) => movie.id === id);
    if (movie && !this.watchList.includes(movie)) {
      this.watchList = [...this.watchList, movie];
    }
  }
  trackById(index: number, item: Movie): number {
    return item.id;
  }
}
