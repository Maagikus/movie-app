import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { switchMap, map, catchError, of, mergeMap, tap } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import * as AuthActions from '../actions/auth.actions';
import { Store } from '@ngrx/store';
import { User } from '../state';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap(({ userName, password }) =>
        this.authService.createSession(userName, password).pipe(
          switchMap((sessionResponse) => {
            const sessionId = sessionResponse.session_id;
            return this.authService.getUserDetails(sessionId).pipe(
              map((user) => {
                localStorage.setItem('user', JSON.stringify(user));
                return AuthActions.loginSuccess({ sessionId, user });
              }),
              catchError((error) => of(AuthActions.loginFailure({ error }))),
            );
          }),
          catchError((error) => of(AuthActions.loginFailure({ error }))),
        ),
      ),
    ),
  );
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private store: Store,
  ) {}
}
