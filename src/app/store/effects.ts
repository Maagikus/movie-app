import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { mergeMap, map, catchError, of } from 'rxjs';
import { MovieService } from '../services/movie.service';

@Injectable()
export class ProspectEffects {
  //   loadMovies$ = createEffect(() =>
  //     this.actions$.pipe(
  //       ofType(YourActions.loadMovies),
  //       mergeMap(() => {
  //         return this.movieService.getMovieList().pipe(
  //           map((movies) =>
  //             YourActions.loadMoviesSuccess({
  //               movies,
  //             }),
  //           ),
  //           catchError((error) =>
  //             of(
  //               YourActions.loadMoviesFailure({
  //                 error,
  //               }),
  //             ),
  //           ),
  //         );
  //       }),
  //     ),
  //   );

  constructor(
    private actions$: Actions,
    private movieService: MovieService,
  ) {}
}
