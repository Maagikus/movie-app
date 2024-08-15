import { createAction, props } from '@ngrx/store';
import { User } from '../state';

export const login = createAction(
  '[Auth] Login User',
  props<{ userName: string; password: string }>(),
);
export const loginSuccess = createAction(
  '[Auth] Login User Success',
  props<{ sessionId: string; user: User }>(),
);
export const loginFailure = createAction('[Auth] Login Failure', props<{ error: any }>());

export const setUser = createAction('[Auth] Set User', props<{ user: User }>());
