import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss',
})
export class MovieCardComponent {
  @Input() movie!: Movie;
  @Output() addFavorite = new EventEmitter<number>();
  @Output() addWatchList = new EventEmitter<number>();

  constructor() {}

  transformOverview(value: string) {
    const MAX_LENGTH = 100;
    if (value.length < MAX_LENGTH) value;
    const truncatedString = value.substring(0, MAX_LENGTH);
    const lastSpaceIndex = truncatedString.lastIndexOf(' ');
    return lastSpaceIndex === -1
      ? truncatedString
      : truncatedString.substring(0, lastSpaceIndex) + '...';
  }
  addToFavorites() {
    this.addFavorite.emit(this.movie.id);
  }
  addToWatchList() {
    this.addWatchList.emit(this.movie.id);
  }
}
