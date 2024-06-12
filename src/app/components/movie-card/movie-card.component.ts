import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { TextTruncatePipe } from '../../pipes/text-splitter/text-truncate.pipe';
import { DurationTransformerPipe } from '../../pipes/duration-transformer/duration-transformer.pipe';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule, TextTruncatePipe, DurationTransformerPipe],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss',
})
export class MovieCardComponent {
    @Input() movie!: Movie;
    @Output() addFavorite = new EventEmitter<number>();
    @Output() addWatchList = new EventEmitter<number>();

    constructor() {}

    addToFavorites() {
      this.addFavorite.emit(this.movie.id);
    }
    addToWatchList() {
      this.addWatchList.emit(this.movie.id);
    }
}
