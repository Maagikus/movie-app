import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { topRatedMovies } from 'mock-data';
import { MovieListComponent } from 'src/app/components/movie-list/movie-list.component';
import { Movie } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-top-rate',
  standalone: true,
  imports: [CommonModule, MovieListComponent],
  providers: [],
  templateUrl: './top-rate.component.html',
  styleUrl: './top-rate.component.scss',
})
export class TopRateComponent implements OnInit {
  movieList: Movie[] = [];
  constructor(private movieService: MovieService) {}
  ngOnInit(): void {
    this.movieService.getMovies('top_rated').subscribe((response) => {
      this.movieList = response;
    });
  }
}
