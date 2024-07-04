import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from 'src/app/components/movie-list/movie-list.component';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-popular',
  standalone: true,
  imports: [CommonModule, MovieListComponent],
  providers: [],
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.scss',
})
export class PopularComponent implements OnInit {
  movieList: Movie[] = [];

  constructor(private movieService: MovieService) {}
  ngOnInit(): void {
    this.movieService.getMovies('popular').subscribe((response) => {
      this.movieList = response;
    });
  }
}
