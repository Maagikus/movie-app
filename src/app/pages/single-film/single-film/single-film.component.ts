import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/movie';
import { ImageSizes } from 'src/app/interfaces/image-sizes';
import { IMAGES_SIZES } from 'src/app/constants/image-sizes';
import { CommonModule } from '@angular/common';
import { MovieService } from 'src/app/services/movie.service';
import { DurationTransformerPipe } from '../../../pipes/duration-transformer/duration-transformer.pipe';
import { Store } from '@ngrx/store';
import { selectUser } from 'src/app/store/selectors';

@Component({
  selector: 'app-single-film',
  standalone: true,
  providers: [],
  templateUrl: './single-film.component.html',
  styleUrl: './single-film.component.scss',
  imports: [CommonModule, DurationTransformerPipe],
})
export class SingleFilmComponent implements OnInit {
  movies: Movie[] = [];
  movie: Movie | undefined;
  imageSizes: ImageSizes = IMAGES_SIZES;
  private userId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService,
    private store: Store,
  ) {}
  ngOnInit(): void {
    const curentMovieId = this.route.snapshot.params['id'];
    this.store.select(selectUser).subscribe((user) => {
      if (user) {
        this.userId = user.id;
      }
    });
    this.movieService.getSingleFilmById(curentMovieId).subscribe((response) => {
      this.movie = response;
    });
  }
  addToFavorites() {
    const movieId = this.movie?.id;

    if (this.userId && movieId) {
      this.movieService.setToFavourite(movieId, this.userId);
    }
  }
  addToWatchList() {
    const movieId = this.movie?.id;
    if (this.userId && movieId) {
      this.movieService.setToFavourite(movieId, this.userId);
      this.movieService.setToWatchList(movieId, this.userId);
    }
  }
}
