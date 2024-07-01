import { Component } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { popularMovies } from 'mock-data';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from 'src/app/components/movie-list/movie-list.component';

@Component({
  selector: 'app-popular',
  standalone: true,
  imports: [CommonModule, MovieListComponent],
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.scss',
})
export class PopularComponent {
  movieList: Movie[] = popularMovies;
}
