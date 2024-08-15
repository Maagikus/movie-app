import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { IMAGES_SIZES } from 'src/app/constants/image-sizes';
import { PreventDefaultDirective } from 'src/app/directives/prevent-default/prevent-default.directive';
import { ImageSizes } from 'src/app/interfaces/image-sizes';
import { Movie } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/services/movie.service';
import { selectUser } from 'src/app/store/selectors';

@Component({
  selector: 'app-movie-mini-card',
  standalone: true,
  imports: [CommonModule, PreventDefaultDirective, RouterLink],
  providers: [],
  templateUrl: './movie-mini-card.component.html',
  styleUrl: './movie-mini-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieMiniCardComponent implements OnInit {
  private userId: number | null = null;

  @Input() movie!: Movie;
  movieUrl: string = '';
  isImageLoaded: boolean = false;
  imageSizes: ImageSizes = IMAGES_SIZES;
  constructor(
    private movieService: MovieService,
    private store: Store,
  ) {}
  ngOnInit() {
    this.movieUrl = `${this.imageSizes.large}${this.movie.backdrop_path}`;
    this.store.select(selectUser).subscribe((user) => {
      if (user) {
        this.userId = user.id;
      }
    });
  }
  addToFavorites() {
    const movieId = this.movie.id;
    if (this.userId) {
      this.movieService.setToFavourite(movieId, this.userId);
    }
  }
  addToWatchList() {
    const movieId = this.movie.id;
    if (this.userId) {
      this.movieService.setToWatchList(movieId, this.userId);
    }
  }
}
