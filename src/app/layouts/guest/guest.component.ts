import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-guest',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './guest.component.html',
  styleUrl: './guest.component.scss',
})
export class GuestComponent {}
