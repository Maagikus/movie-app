import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { upcomingMovies } from 'mock-data';
import { MovieListComponent } from 'src/app/components/movie-list/movie-list.component';
import { Movie } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-upcoming',
  standalone: true,
  imports: [CommonModule, MovieListComponent],
  providers: [],
  templateUrl: './upcoming.component.html',
  styleUrl: './upcoming.component.scss',
})
export class UpcomingComponent implements OnInit {
  movieList: Movie[] = [];
  constructor(private movieService: MovieService) {}
  ngOnInit(): void {
    this.movieService.getMovies('upcoming').subscribe((response) => {
      this.movieList = response;
    });
  }
}
