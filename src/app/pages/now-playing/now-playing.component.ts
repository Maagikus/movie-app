import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MovieListComponent } from 'src/app/components/movie-list/movie-list.component';
import { Movie } from 'src/app/interfaces/movie';

import { loadNowPlayingMovies } from 'src/app/store/actions/movie.actions';
import { selectNowPlaying } from 'src/app/store/selectors';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-now-playing',
  standalone: true,
  imports: [CommonModule, MovieListComponent, PaginatorModule],
  providers: [],
  templateUrl: './now-playing.component.html',
  styleUrl: './now-playing.component.scss',
})
export class NowPlayingComponent implements OnInit {
  movieList: Movie[] = [];
  totalPages: number = 0;
  first: number = 0;
  rows: number = 10;
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(loadNowPlayingMovies({ movieType: 'now_playing', page: 1 }));
    this.store.select(selectNowPlaying).subscribe((movies) => {
      if (movies) {
        this.movieList = movies?.results || [];
        this.totalPages = movies?.total_pages * 10;
      }
    });
  }
  onPageChange(event: any) {
    this.store.dispatch(loadNowPlayingMovies({ movieType: 'now_playing', page: event.page + 1 }));
    this.store.select(selectNowPlaying).subscribe((movies) => {
      if (movies) {
        this.movieList = movies?.results || [];
      }
    });
  }
}
