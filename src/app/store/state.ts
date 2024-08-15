import { Movie, MovieDto } from '../interfaces/movie';
import { SubscriptionData } from '../interfaces/subscription';

export interface User {
  avatar: {
    gravatar: {
      hash: string;
    };
    tmdb: {
      avatar_path: string | null;
    };
  };
  id: number;
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  include_adult: boolean;
  username: string;
}
export interface MovieState {
  movies: MovieDto | null;
  searchedMovies: MovieDto | null;
  popularMovies: MovieDto | null;
  nowPlaying: MovieDto | null;
  topRated: MovieDto | null;
  upcoming: MovieDto | null;
  user: User | null;
  subsctiptionDetails: SubscriptionData | null;
}

export const initialState: MovieState = {
  movies: null,
  searchedMovies: null,
  popularMovies: null,
  nowPlaying: null,
  topRated: null,
  upcoming: null,
  user: null,
  subsctiptionDetails: null,
};
