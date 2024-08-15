import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { mergeMap, map, catchError, of, switchMap } from 'rxjs';
import { MovieService } from '../../services/movie.service';
import * as MovieActions from '../actions/movie.actions';

@Injectable()
export class MovieEffects {
  loadSubscription$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.loadSubscriptionFromLocalStorage),
      map(() => {
        const subscriptionData = localStorage.getItem('subscription');
        if (subscriptionData) {
          const subscription = JSON.parse(subscriptionData);
          return MovieActions.loadSubscriptionSuccess({ subscription: subscription.data });
        } else {
          return MovieActions.loadSubscriptionSuccess({
            subscription: { name: '', email: '', birthYear: '', genre: [] },
          });
        }
      }),
      catchError((error) => {
        return of(MovieActions.loadSubscriptionFailure({ error }));
      }),
    ),
  );
  saveSubscription$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.subscribe),
      map(({ data }) => {
        localStorage.setItem('subscription', JSON.stringify({ data }));
        return MovieActions.subscribeSuccess({ data });
      }),
    ),
  );
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.loadMovies),
      switchMap(({ page, filters }) => {
        return this.movieService.getMoviesWithFilters(page, filters).pipe(
          map((movies) => MovieActions.loadMoviesSuccess({ movies })),
          catchError((error) => of(MovieActions.loadMoviesFailure({ error }))),
        );
      }),
    ),
  );
  searchMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.searchMovies),
      switchMap(({ page, request }) => {
        return this.movieService.searchMovie(request, page).pipe(
          map((movies) => MovieActions.searchMoviesSuccess({ movies })),
          catchError((error) => of(MovieActions.searchMoviesFailure({ error }))),
        );
      }),
    ),
  );
  loadPopularMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.loadPopularMovies),
      switchMap(({ movieType, page }) => {
        return this.movieService.getMovies(movieType, page).pipe(
          map((movies) =>
            MovieActions.loadPopularMoviesSuccess({
              movies,
            }),
          ),
          catchError((error) =>
            of(
              MovieActions.loadPopularMoviesFailure({
                error,
              }),
            ),
          ),
        );
      }),
    ),
  );

  loadNowPlayingMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.loadNowPlayingMovies),
      switchMap(({ movieType, page }) => {
        return this.movieService.getMovies(movieType, page).pipe(
          map((movies) =>
            MovieActions.loadNowPlayingMoviesSuccess({
              movies,
            }),
          ),
          catchError((error) =>
            of(
              MovieActions.loadNowPlayingMoviesFailure({
                error,
              }),
            ),
          ),
        );
      }),
    ),
  );
  loadTopRatedMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.loadTopRatedMovies),
      switchMap(({ movieType, page }) => {
        return this.movieService.getMovies(movieType, page).pipe(
          map((movies) =>
            MovieActions.loadTopRatedMoviesSuccess({
              movies,
            }),
          ),
          catchError((error) =>
            of(
              MovieActions.loadTopRatedMoviesFailure({
                error,
              }),
            ),
          ),
        );
      }),
    ),
  );
  loadUpcomingMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.loadUpcomingMovies),
      switchMap(({ movieType, page }) => {
        return this.movieService.getMovies(movieType, page).pipe(
          map((movies) =>
            MovieActions.loadUpcomingMoviesSuccess({
              movies,
            }),
          ),
          catchError((error) =>
            of(
              MovieActions.loadUpcomingMoviesFailure({
                error,
              }),
            ),
          ),
        );
      }),
    ),
  );

  constructor(
    private actions$: Actions,
    private movieService: MovieService,
  ) {}
}
