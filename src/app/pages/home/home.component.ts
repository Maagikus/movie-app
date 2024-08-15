import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MovieListComponent } from 'src/app/components/movie-list/movie-list.component';
import { FilterNodes, Genre, Movie, MovieDto } from 'src/app/interfaces/movie';
import { loadMovies, searchMovies } from 'src/app/store/actions/movie.actions';
import { selectMovies, selectSearchedMovies } from 'src/app/store/selectors';
import { PaginatorModule } from 'primeng/paginator';
import { TreeSelectModule } from 'primeng/treeselect';
import { filterNodes, genres } from 'src/app/constants/movie';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TreeNodeUnSelectEvent, TreeNodeSelectEvent } from 'primeng/tree';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MovieListComponent,
    PaginatorModule,
    ReactiveFormsModule,
    TreeSelectModule,
    ButtonModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  movieList: Movie[] = [];
  searchedList: Movie[] = [];
  first: number = 0;
  rows: number = 10;
  formGroup!: FormGroup;
  searchFormGroup!: FormGroup;
  totalPages: number = 0;
  nodes: FilterNodes[] | [] = [];
  totalPagesForSearch: number = 0;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.nodes = filterNodes;
    genres.forEach((item: Genre, index: number) => {
      if (this.nodes[0].children && this.nodes[1].children) {
        this.nodes[0].children.push({
          key: `0-${index}`,
          label: item.name,
          data: item,
        });
        this.nodes[1].children.push({
          key: `1-${index}`,
          label: item.name,
          data: item,
        });
      }
    });

    this.formGroup = new FormGroup({
      selectedNodes: new FormControl([]),
    });
    this.searchFormGroup = new FormGroup({
      search: new FormControl(''),
    });

    this.loadMovies();
    this.store.select(selectMovies).subscribe((movies) => {
      if (movies) {
        this.movieList = movies?.results || [];
        this.totalPages = movies?.total_pages > 500 ? 5000 : movies?.total_pages * 10;
      }
    });
    this.formGroup.get('selectedNodes')!.valueChanges.subscribe(() => {
      this.onFiltersChange();
    });
    this.store.select(selectSearchedMovies).subscribe((searchedMovies: MovieDto | null) => {
      if (searchedMovies) {
        this.searchedList = searchedMovies.results;
        this.totalPagesForSearch = searchedMovies.total_pages * 10;
      }
    });
  }
  onSearch(): void {
    const searchRequest = this.searchFormGroup.value.search as string;
    this.store.dispatch(searchMovies({ page: 1, request: searchRequest }));
    this.store.select(selectSearchedMovies).subscribe((searchedMovies: MovieDto | null) => {
      if (searchedMovies) {
        this.searchedList = searchedMovies.results;
        this.totalPagesForSearch = searchedMovies.total_pages * 10;
      }
    });
  }
  loadMovies(filters: any = {}): void {
    this.store.dispatch(loadMovies({ page: 1, filters }));
  }
  onFiltersChange(): void {
    const filters = this.buildFilters();
    this.loadMovies(filters);
  }
  buildFilters(): any {
    const selectedNodes = this.formGroup.get('selectedNodes')!.value || [];
    const filters: any = {
      with_genres: '',
      without_genres: '',
      sort_by: '',
    };
    selectedNodes.forEach((node: any) => {
      if (node.data && typeof node.data === 'string') {
        filters.sort_by = node.data;
      } else if (node.data) {
        if (node.key.startsWith('0-')) {
          filters.with_genres += `${node.data.id},`;
        } else if (node.key.startsWith('1-')) {
          filters.without_genres += `${node.data.id},`;
        }
      }
    });
    filters.with_genres = filters.with_genres.slice(0, -1);
    filters.without_genres = filters.without_genres.slice(0, -1);
    if (!filters.with_genres) delete filters.with_genres;
    if (!filters.without_genres) delete filters.without_genres;
    if (!filters.sort_by) delete filters.sort_by;

    return filters;
  }
  onPageChange(event: any) {
    const filters = this.buildFilters();
    this.store.dispatch(loadMovies({ page: event.page + 1, filters }));
    this.store.select(selectMovies).subscribe((movies) => {
      if (movies) {
        this.movieList = movies?.results || [];
        this.totalPages = movies?.total_pages > 500 ? 5000 : movies?.total_pages * 10;
      }
    });
  }
  onSearchPageChange(event: any) {
    const searchRequest = this.searchFormGroup.value.search as string;
    this.store.dispatch(searchMovies({ page: event.page + 1, request: searchRequest }));
    this.store.select(selectSearchedMovies).subscribe((searchedMovies: MovieDto | null) => {
      if (searchedMovies) {
        this.searchedList = searchedMovies.results;
      }
    });
  }
}
