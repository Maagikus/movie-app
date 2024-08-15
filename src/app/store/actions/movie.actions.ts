import { createAction, props } from '@ngrx/store';
import { Movie, MovieDto } from '../../interfaces/movie';
import { SubscriptionData } from 'src/app/interfaces/subscription';

export const loadSubscriptionFromLocalStorage = createAction(
  '[Subscription] Load From Local Storage',
);
export const loadSubscriptionSuccess = createAction(
  '[Subscription] Load From Local Storage Success',
  props<{ subscription: SubscriptionData }>(),
);
export const loadSubscriptionFailure = createAction(
  '[Subscription] Load From Local Storage Failure',
  props<{ error: any }>(),
);

export const subscribe = createAction(
  '[Subscription] Subscribe',
  props<{ data: SubscriptionData }>(),
);
export const subscribeSuccess = createAction(
  '[Subscription] Subscribe Success',
  props<{ data: SubscriptionData }>(),
);

export const loadMovies = createAction(
  '[Movie] Load  Movies',
  props<{ page: number; filters: any }>(),
);
export const loadMoviesSuccess = createAction(
  '[Movie] Load  Movies Success',
  props<{ movies: MovieDto | null }>(),
);
export const loadMoviesFailure = createAction(
  '[Movie] Load  Movies Failure',
  props<{ error: any }>(),
);

export const searchMovies = createAction(
  '[Movie] Search  Movies',
  props<{ page: number; request: string }>(),
);
export const searchMoviesSuccess = createAction(
  '[Movie] Search  Movies Success',
  props<{ movies: MovieDto | null }>(),
);
export const searchMoviesFailure = createAction(
  '[Movie] Search  Movies Failure',
  props<{ error: any }>(),
);

export const loadPopularMovies = createAction(
  '[Movie] Load Popular Movies',
  props<{ movieType: string; page?: number }>(),
);
export const loadPopularMoviesSuccess = createAction(
  '[Movie] Load Popular Movies Success',
  props<{ movies: MovieDto | null }>(),
);
export const loadPopularMoviesFailure = createAction(
  '[Movie] Load Popular Movies Failure',
  props<{ error: any }>(),
);

export const loadNowPlayingMovies = createAction(
  '[Movie] Load Popular Movies',
  props<{ movieType: string; page?: number }>(),
);
export const loadNowPlayingMoviesSuccess = createAction(
  '[Movie] Load Now Playing Movies Success',
  props<{ movies: MovieDto | null }>(),
);
export const loadNowPlayingMoviesFailure = createAction(
  '[Movie] Load Now Playing Movies Failure',
  props<{ error: any }>(),
);

export const loadTopRatedMovies = createAction(
  '[Movie] Load Top Rated Movies',
  props<{ movieType: string; page?: number }>(),
);
export const loadTopRatedMoviesSuccess = createAction(
  '[Movie] Load Top Rated Movies Success',
  props<{ movies: MovieDto | null }>(),
);
export const loadTopRatedMoviesFailure = createAction(
  '[Movie] Load Top Rated Movies Failure',
  props<{ error: any }>(),
);

export const loadUpcomingMovies = createAction(
  '[Movie] Load Upcoming Movies',
  props<{ movieType: string; page?: number }>(),
);
export const loadUpcomingMoviesSuccess = createAction(
  '[Movie] Load Upcoming Movies Success',
  props<{ movies: MovieDto | null }>(),
);
export const loadUpcomingMoviesFailure = createAction(
  '[Movie] Load Upcoming Movies Failure',
  props<{ error: any }>(),
);
