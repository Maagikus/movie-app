import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { upcomingMovies } from 'mock-data';
import { MovieListComponent } from 'src/app/components/movie-list/movie-list.component';
import { Movie } from 'src/app/interfaces/movie';

@Component({
  selector: 'app-upcoming',
  standalone: true,
  imports: [CommonModule, MovieListComponent],
  templateUrl: './upcoming.component.html',
  styleUrl: './upcoming.component.scss',
})
export class UpcomingComponent {
  movieList: Movie[] = upcomingMovies;
}
