import { createAction, props } from '@ngrx/store';
import { Movie } from '../interfaces/movie';

export const loadMovies = createAction('[Movie] Load Movies');

export const loadMoviesSuccess = createAction(
  '[Movie] Load Movies Success',
  props<{ movies: Movie[] | null }>(),
);

export const loadMoviesFailure = createAction(
  '[Movie] Load Moviess Failure',
  props<{ error: any }>(),
);
