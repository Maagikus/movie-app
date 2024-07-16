import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MovieListComponent } from 'src/app/components/movie-list/movie-list.component';
import { Movie } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-now-playing',
  standalone: true,
  imports: [CommonModule, MovieListComponent],
  providers: [],
  templateUrl: './now-playing.component.html',
  styleUrl: './now-playing.component.scss',
})
export class NowPlayingComponent implements OnInit {
  movieList: Movie[] = [];

  constructor(private movieService: MovieService) {}
  ngOnInit(): void {
    this.movieService.getMovies('now_playing').subscribe((response) => {
      this.movieList = response;
    });
  }
}
