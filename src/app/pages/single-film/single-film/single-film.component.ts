import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/movie';
import { allMovies } from 'mock-data';
import { ImageSizes } from 'src/app/interfaces/image-sizes';
import { IMAGES_SIZES } from 'src/app/constants/image-sizes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-film',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-film.component.html',
  styleUrl: './single-film.component.scss',
})
export class SingleFilmComponent implements OnInit {
  movies: Movie[] = allMovies;
  movie: Movie | undefined;
  imageSizes: ImageSizes = IMAGES_SIZES;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}
  ngOnInit(): void {
    this.movie = this.movies.find((item: Movie) => item.id == this.route.snapshot.params['id']);
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
