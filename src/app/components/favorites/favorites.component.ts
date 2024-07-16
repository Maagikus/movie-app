import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MovieMiniCardComponent } from 'src/app/components/movie-mini-card/movie-mini-card.component';
import { Movie } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, MovieMiniCardComponent],
  providers: [],
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  favorites: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.getFavouriteMovies$().subscribe((item) => {
      this.favorites = Array.from(item);
    });
  }

  trackByFn(index: number, item: any) {
    return item.id;
  }
}
