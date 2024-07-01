import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IMAGES_SIZES } from 'src/app/constants/image-sizes';
import { PreventDefaultDirective } from 'src/app/directives/prevent-default/prevent-default.directive';
import { ImageSizes } from 'src/app/interfaces/image-sizes';
import { Movie } from 'src/app/interfaces/movie';

@Component({
  selector: 'app-movie-mini-card',
  standalone: true,
  imports: [CommonModule, PreventDefaultDirective, RouterLink],
  templateUrl: './movie-mini-card.component.html',
  styleUrl: './movie-mini-card.component.scss',
})
export class MovieMiniCardComponent implements OnInit {
  @Input() movie!: Movie;
  @Output() addFavorite = new EventEmitter<number>();
  @Output() addWatchList = new EventEmitter<number>();
  movieUrl: string = '';
  movieAsString = JSON.stringify(this.movie);

  imageSizes: ImageSizes = IMAGES_SIZES;
  constructor(private router: Router) {}
  ngOnInit() {
    this.movieUrl = `${this.imageSizes.large}${this.movie.backdrop_path}`;
  }
  addToFavorites() {
    this.router.navigate([{ outlets: { additional: ['favourite'] } }], {
      queryParams: { data: JSON.stringify(this.movie) },
    });
  }
  addToWatchList() {
    this.router.navigate([{ outlets: { additional: ['watch-list'] } }], {
      queryParams: { data: JSON.stringify(this.movie) },
    });
  }
}
