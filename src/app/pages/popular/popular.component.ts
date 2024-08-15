import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from 'src/app/components/movie-list/movie-list.component';
import { Store } from '@ngrx/store';
import { loadPopularMovies } from 'src/app/store/actions/movie.actions';
import { selectPopular } from 'src/app/store/selectors';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-popular',
  standalone: true,
  imports: [CommonModule, MovieListComponent, PaginatorModule],
  providers: [],
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.scss',
})
export class PopularComponent implements OnInit {
  movieList: Movie[] = [];
  totalPages: number = 0;
  first: number = 0;
  rows: number = 10;
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(loadPopularMovies({ movieType: 'popular', page: 1 }));
    this.store.select(selectPopular).subscribe((movies) => {
      if (movies) {
        this.movieList = movies?.results || [];
        this.totalPages = movies?.total_pages * 10;
      }
    });
  }
  onPageChange(event: any) {
    this.store.dispatch(loadPopularMovies({ movieType: 'popular', page: event.page + 1 }));
    this.store.select(selectPopular).subscribe((movies) => {
      if (movies) {
        this.movieList = movies?.results || [];
      }
    });
  }
}
