import { Injectable } from '@angular/core';
import { Genre, Movie, MovieDto, MovieFilter } from '../interfaces/movie';
import { Observable, forkJoin, map, of, switchMap, take } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Store } from '@ngrx/store';
import { selectSubscription } from '../store/selectors';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private readonly bearerToken = environment.bearerToken;
  private readonly baseUrl = environment.apiBaseUrl;
  private readonly apiKey = environment.apiKey;
  private readonly headers = new HttpHeaders({
    accept: 'application/json',
    Authorization: `Bearer ${this.bearerToken}`,
  });

  constructor(
    private http: HttpClient,
    private store: Store,
  ) {}

  setToWatchList(id: number, userId: number): void {
    const url = `https://api.themoviedb.org/3/account/${userId}/watchlist`;
    const body = { media_type: 'movie', media_id: id, watchlist: true };
    this.http.post(url, body, { headers: this.headers });
  }
  setToFavourite(id: number, userId: number): void {
    const url = `https://api.themoviedb.org/3/account/${userId}/favorite`;
    const body = { media_type: 'movie', media_id: id, favorite: true };
    this.http.post(url, body, { headers: this.headers });
  }
  getMoviesWithFilters(page: number = 1, filters?: MovieFilter): Observable<MovieDto> {
    const defaultFilters: MovieFilter = {
      with_genres: '',
      include_adult: false,
    };

    return this.store.select(selectSubscription).pipe(
      take(1),
      map((subscription) => {
        if (subscription) {
          const currentYear = new Date().getFullYear();
          const age = currentYear - parseInt(subscription.birthYear, 10);
          defaultFilters.with_genres = subscription.genre.map((genre: Genre) => genre.id).join('|');
          defaultFilters.include_adult = age >= 18;
        }
        return filters && Object.keys(filters).length > 0 ? filters : defaultFilters;
      }),
      map((mergedFilters: MovieFilter) => {
        const queryString = Object.keys(mergedFilters)
          .map((key) => {
            const value = mergedFilters[key as keyof MovieFilter];
            return `${key}=${encodeURIComponent(value as string)}`;
          })
          .join('&');
        return `https://api.themoviedb.org/3/discover/movie?page=${page}&${queryString}`;
      }),
      switchMap((url) => this.http.get<MovieDto>(url, { headers: this.headers })),
      // map((result) => result),
    );
  }
  getMovies(type: string = 'popular', page: number = 1): Observable<MovieDto> {
    const url = `${this.baseUrl}/movie/${type}?page=${page}`;
    return this.http.get<MovieDto>(url, { headers: this.headers });
  }
  getFavouriteMovies(userId: number): Observable<Movie[]> {
    const session_id = sessionStorage.getItem('session_id');
    const url = `https://api.themoviedb.org/3/account/${userId}/favorite/movies?session_id=${session_id}`;
    return this.http.get<{ results: Movie[] }>(url, { headers: this.headers }).pipe(
      map((response) => {
        return response.results;
      }),
    );
  }
  searchMovie(query: string, page: number = 1): Observable<MovieDto> {
    const encodedQuery = encodeURIComponent(query);
    const url = `https://api.themoviedb.org/3/search/movie?query=${encodedQuery}&page=${page}`;
    return this.http.get<MovieDto>(url, { headers: this.headers });
  }
  getWatchList(userId: number): Observable<Movie[]> {
    const session_id = sessionStorage.getItem('session_id');
    const url = `https://api.themoviedb.org/3/account/${userId}/watchlist/movies?session_id=${session_id}`;
    return this.http.get<{ results: Movie[] }>(url, { headers: this.headers }).pipe(
      map((response) => {
        return response.results;
      }),
    );
  }
  getSingleFilmById(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`);
  }
  getMoviesByIds(ids: number[]): Observable<Movie[]> {
    if (!ids.length) {
      return of([]);
    }
    const movieObservables = ids.map((id) => this.getSingleFilmById(id));
    return forkJoin(movieObservables).pipe(
      switchMap((movies) => of(movies.filter((movie) => movie !== undefined) as Movie[])),
    );
  }
}
