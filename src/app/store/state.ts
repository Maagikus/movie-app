import { Movie } from '../interfaces/movie';

export interface MovieState {
  movies: Movie[] | null;
}

export const initialState: MovieState = {
  movies: null,
};
