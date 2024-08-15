import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { MovieReducer } from './store/reducers/movie.reducers';
import { MovieEffects } from './store/effects/movie.effects';
import { AuthEffects } from './store/effects/auth.effects';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimationsAsync(),
    provideStore({ movieState: MovieReducer }),
    provideEffects([MovieEffects, AuthEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    DialogService,
    MessageService,
  ],
};
