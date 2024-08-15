import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/services/auth.service';
import { login } from 'src/app/store/actions/auth.actions';
import { selectUser } from 'src/app/store/selectors';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DialogModule, ButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(
    private store: Store,
    private router: Router,
  ) {}
  loginForm = new FormGroup({
    userName: new FormControl<string>('', { nonNullable: true }),
    password: new FormControl<string>('', { nonNullable: true }),
  });
  async onSubmit() {
    const userName = this.loginForm.value.userName as string;
    const password = this.loginForm.value.password as string;
    this.store.dispatch(login({ userName, password }));
    this.store.select(selectUser).subscribe((user) => {
      if (user) {
        this.router.navigate(['/']);
      }
    });
  }
}
