import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { nowPlayingMovies } from 'mock-data';
import { MovieListComponent } from 'src/app/components/movie-list/movie-list.component';
import { Movie } from 'src/app/interfaces/movie';

@Component({
  selector: 'app-now-playing',
  standalone: true,
  imports: [CommonModule, MovieListComponent],
  templateUrl: './now-playing.component.html',
  styleUrl: './now-playing.component.scss',
})
export class NowPlayingComponent {
  movieList: Movie[] = nowPlayingMovies;
}
