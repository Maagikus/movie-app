import { Component } from '@angular/core';
import { GuestComponent } from 'src/app/layouts/guest/guest.component';
import { LoginComponent } from 'src/app/components/login/login.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [LoginComponent, GuestComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginPage {}
