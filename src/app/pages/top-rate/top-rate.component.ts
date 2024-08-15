import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MovieListComponent } from 'src/app/components/movie-list/movie-list.component';
import { Movie } from 'src/app/interfaces/movie';
import { Store } from '@ngrx/store';
import { loadTopRatedMovies } from 'src/app/store/actions/movie.actions';
import { selectTopRated } from 'src/app/store/selectors';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-top-rate',
  standalone: true,
  imports: [CommonModule, MovieListComponent, PaginatorModule],
  providers: [],
  templateUrl: './top-rate.component.html',
  styleUrl: './top-rate.component.scss',
})
export class TopRateComponent implements OnInit {
  movieList: Movie[] = [];
  totalPages: number = 0;
  first: number = 0;
  rows: number = 10;
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(loadTopRatedMovies({ movieType: 'top_rated', page: 1 }));
    this.store.select(selectTopRated).subscribe((movies) => {
      if (movies) {
        this.movieList = movies?.results || [];
        this.totalPages = movies?.total_pages * 10;
      }
    });
  }
  onPageChange(event: any) {
    this.store.dispatch(loadTopRatedMovies({ movieType: 'top_rated', page: event.page + 1 }));
    this.store.select(selectTopRated).subscribe((movies) => {
      if (movies) {
        this.movieList = movies?.results || [];
      }
    });
  }
}
