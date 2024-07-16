import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MovieState } from './state';

export const selectState = createFeatureSelector<MovieState>('yourState');

export const selectMovies = createSelector(selectState, (state) => state.movies);
