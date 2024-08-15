import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MovieState, initialState } from './state';

export const selectState = createFeatureSelector<MovieState>('movieState');
export const selectMovies = createSelector(selectState, (state) => state.movies);
export const selectSearchedMovies = createSelector(selectState, (state) => state.searchedMovies);
export const selectPopular = createSelector(selectState, (state) => state.popularMovies);
export const selectNowPlaying = createSelector(selectState, (state) => state.nowPlaying);
export const selectTopRated = createSelector(selectState, (state) => state.topRated);
export const selectUpcoming = createSelector(selectState, (state) => state.upcoming);
export const selectUser = createSelector(selectState, (state) => state.user);
export const selectSubscription = createSelector(selectState, (state) => state.subsctiptionDetails);
