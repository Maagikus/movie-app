import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { CommonModule } from '@angular/common';
import { MovieMiniCardComponent } from '../movie-mini-card/movie-mini-card.component';
import { SkeletonModule } from 'primeng/skeleton';
@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [
    CommonModule,
    MovieCardComponent,
    MovieMiniCardComponent,
    MovieMiniCardComponent,
    SkeletonModule,
  ],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieListComponent {
  @Input() movieList!: Movie[];
  skeletonList: number[] = Array(20).fill(0);
  trackById(index: number, item: Movie | any): number {
    return item.id;
  }
}
