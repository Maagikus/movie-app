import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Store } from '@ngrx/store';
import { selectUser } from '../store/selectors';
import { LoginComponent } from '../components/login/login.component';
import { DialogService } from 'primeng/dynamicdialog';

export const authGuard: CanActivateFn = ():
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const isUserAuthenticated = authService.authenticated();
  const dialogService = inject(DialogService);
  if (isUserAuthenticated) {
    return true;
  } else {
    dialogService.open(LoginComponent, {
      header: 'Login',
      width: '30%',
      contentStyle: {
        overflow: 'auto',
      },
      breakpoints: {
        '960px': '75vw',
        '640px': '90vw',
        '320px': '100vw',
      },
      baseZIndex: 10000,
      // maximizable: true,
    });
    return false;
  }
};
