import { Injectable } from '@angular/core';
import { Movie, MovieDto } from '../interfaces/movie';
import { BehaviorSubject, Observable, of, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private readonly baseUrl = environment.apiBaseUrl;
  private readonly apiKey = environment.apiKey;
  private watchList$ = new BehaviorSubject<Set<number>>(new Set<number>());
  private favourite$ = new BehaviorSubject<Set<number>>(new Set<number>());
  _watchList: Observable<Set<number>> = this.watchList$.asObservable();
  _favourite: Observable<Set<number>> = this.favourite$.asObservable();

  constructor(private http: HttpClient) {}

  setToWatchList(id: number): void {
    const currentList = this.watchList$.getValue();
    if (!currentList.has(id)) {
      currentList.add(id);
      this.watchList$.next(new Set(currentList));
    }
  }

  setToFavourite(id: number): void {
    const currentList = this.favourite$.getValue();
    if (!currentList.has(id)) {
      currentList.add(id);
      this.favourite$.next(new Set(currentList));
    }
  }

  getMovies(type: string, count: number = 20): Observable<Movie[]> {
    return this.http.get<MovieDto>(`${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`).pipe(
      switchMap((response) => {
        return of(response.results.slice(0, count));
      }),
    );
  }

  getFavouriteMovies$(): Observable<Movie[]> {
    return this._favourite.pipe(switchMap((ids) => this.getMoviesByIds(Array.from(ids))));
  }

  getWatchList$(): Observable<Movie[]> {
    return this._watchList.pipe(switchMap((ids) => this.getMoviesByIds(Array.from(ids))));
  }

  getSingleFilmById(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`);
  }

  private getMoviesByIds(ids: number[]): Observable<Movie[]> {
    if (!ids.length) {
      return of([]);
    }
    return of(ids).pipe(
      switchMap((ids) => Promise.all(ids.map((id) => this.getSingleFilmById(id).toPromise()))),
      switchMap((movies) => of(movies.filter((movie) => movie !== undefined) as Movie[])),
    );
  }
}
