import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { CommonModule } from '@angular/common';
import { MovieMiniCardComponent } from '../movie-mini-card/movie-mini-card.component';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, MovieCardComponent, MovieMiniCardComponent, MovieMiniCardComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
})
export class MovieListComponent {
  @Input() movieList!: Movie[];
  trackById(index: number, item: Movie): number {
    return item.id;
  }
}
