import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IMAGES_SIZES } from 'src/app/constants/image-sizes';
import { PreventDefaultDirective } from 'src/app/directives/prevent-default/prevent-default.directive';
import { ImageSizes } from 'src/app/interfaces/image-sizes';
import { Movie } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-mini-card',
  standalone: true,
  imports: [CommonModule, PreventDefaultDirective, RouterLink],
  providers: [],
  templateUrl: './movie-mini-card.component.html',
  styleUrl: './movie-mini-card.component.scss',
})
export class MovieMiniCardComponent implements OnInit {
  @Input() movie!: Movie;
  movieUrl: string = '';

  imageSizes: ImageSizes = IMAGES_SIZES;
  constructor(private movieService: MovieService) {}
  ngOnInit() {
    this.movieUrl = `${this.imageSizes.large}${this.movie.backdrop_path}`;
  }
  addToFavorites() {
    const movieId = this.movie.id;
    this.movieService.setToFavourite(movieId);
  }
  addToWatchList() {
    const movieId = this.movie.id;
    this.movieService.setToWatchList(movieId);
  }
}
