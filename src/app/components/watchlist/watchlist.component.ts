import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MovieMiniCardComponent } from 'src/app/components/movie-mini-card/movie-mini-card.component';
import { Movie } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-watchlist',
  standalone: true,
  imports: [CommonModule, MovieMiniCardComponent],
  providers: [],
  templateUrl: './watchlist.component.html',
  styleUrl: './watchlist.component.scss',
})
export class WatchlistComponent {
  watchList: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.getWatchList$().subscribe((item) => {
      this.watchList = Array.from(item);
    });
  }

  trackByFn(index: number, item: any) {
    return item.id;
  }
}
