import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/movie';
import { ImageSizes } from 'src/app/interfaces/image-sizes';
import { IMAGES_SIZES } from 'src/app/constants/image-sizes';
import { CommonModule } from '@angular/common';
import { MovieService } from 'src/app/services/movie.service';
import { DurationTransformerPipe } from '../../../pipes/duration-transformer/duration-transformer.pipe';

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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService,
  ) {}
  ngOnInit(): void {
    const curentMovieId = this.route.snapshot.params['id'];
    this.movieService.getSingleFilmById(curentMovieId).subscribe((response) => {
      this.movie = response;
    });
  }
  addToFavorites() {
    if (this.movie) {
      const movieId = this.movie.id;
      this.movieService.setToFavourite(movieId);
    }
  }
  addToWatchList() {
    if (this.movie) {
      const movieId = this.movie.id;
      this.movieService.setToWatchList(movieId);
    }
  }
}
