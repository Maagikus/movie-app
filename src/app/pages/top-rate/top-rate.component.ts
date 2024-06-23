import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { topRatedMovies } from 'mock-data';
import { MovieListComponent } from 'src/app/components/movie-list/movie-list.component';
import { Movie } from 'src/app/interfaces/movie';

@Component({
  selector: 'app-top-rate',
  standalone: true,
  imports: [CommonModule, MovieListComponent],
  templateUrl: './top-rate.component.html',
  styleUrl: './top-rate.component.scss',
})
export class TopRateComponent {
  movieList: Movie[] = topRatedMovies;
}
