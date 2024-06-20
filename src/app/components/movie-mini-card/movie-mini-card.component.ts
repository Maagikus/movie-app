import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';

@Component({
  selector: 'app-movie-mini-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-mini-card.component.html',
  styleUrl: './movie-mini-card.component.scss',
})
export class MovieMiniCardComponent {
  @Input() movie!: Movie;
}
