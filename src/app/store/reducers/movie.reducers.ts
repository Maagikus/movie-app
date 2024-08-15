import { createReducer, on } from '@ngrx/store';
import { initialState } from '../state';
import * as MovieActions from '../actions/movie.actions';
import { Movie } from 'src/app/interfaces/movie';
import * as AuthActions from '../actions/auth.actions';

export const MovieReducer = createReducer(
  initialState,
  on(MovieActions.loadSubscriptionSuccess, (state, { subscription }) => ({
    ...state,
    subsctiptionDetails: subscription,
  })),
  on(MovieActions.loadSubscriptionFailure, (state, { error }) => ({
    ...state,
    subsctiptionDetails: null,
    error: error,
  })),
  on(MovieActions.subscribeSuccess, (state, { data }) => ({
    ...state,
    subsctiptionDetails: data,
  })),
  on(MovieActions.searchMoviesSuccess, (state, { movies }) => ({
    ...state,
    searchedMovies: movies,
  })),
  on(MovieActions.searchMoviesFailure, (state, { error }) => ({
    ...state,
    searchedMovies: null,
    error: error,
  })),
  on(MovieActions.loadMoviesSuccess, (state, { movies }) => ({
    ...state,
    movies: movies,
  })),
  on(MovieActions.loadMoviesFailure, (state, { error }) => ({
    ...state,
    movies: null,
    error: error,
  })),

  on(MovieActions.loadPopularMoviesSuccess, (state, { movies }) => ({
    ...state,
    popularMovies: movies,
  })),
  on(MovieActions.loadPopularMoviesFailure, (state, { error }) => ({
    ...state,
    popularMovies: null,
    error: error,
  })),

  on(MovieActions.loadNowPlayingMoviesSuccess, (state, { movies }) => ({
    ...state,
    nowPlaying: movies,
  })),
  on(MovieActions.loadNowPlayingMoviesFailure, (state, { error }) => ({
    ...state,
    nowPlaying: null,
    error: error,
  })),

  on(MovieActions.loadTopRatedMoviesSuccess, (state, { movies }) => ({
    ...state,
    topRated: movies,
  })),
  on(MovieActions.loadTopRatedMoviesFailure, (state, { error }) => ({
    ...state,
    topRated: null,
    error: error,
  })),

  on(MovieActions.loadUpcomingMoviesSuccess, (state, { movies }) => ({
    ...state,
    upcoming: movies,
  })),
  on(MovieActions.loadUpcomingMoviesFailure, (state, { error }) => ({
    ...state,
    upcoming: null,
    error: error,
  })),

  on(AuthActions.loginSuccess, (state, { user }) => ({
    ...state,
    user,
    error: null,
  })),
  on(AuthActions.loginFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(AuthActions.setUser, (state, { user }) => ({
    ...state,
    user,
    error: null,
  })),
);
