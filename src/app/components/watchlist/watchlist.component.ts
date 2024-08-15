import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MovieMiniCardComponent } from 'src/app/components/movie-mini-card/movie-mini-card.component';
import { Movie } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/services/movie.service';
import { selectUser } from 'src/app/store/selectors';

@Component({
  selector: 'app-watchlist',
  standalone: true,
  imports: [CommonModule, MovieMiniCardComponent],
  providers: [],
  templateUrl: './watchlist.component.html',
  styleUrl: './watchlist.component.scss',
})
export class WatchlistComponent implements OnInit {
  watchList: Movie[] = [];
  private userId: number | null = null;

  constructor(
    private movieService: MovieService,
    private store: Store,
  ) {}

  ngOnInit() {
    this.store.select(selectUser).subscribe((user) => {
      if (user) {
        this.userId = user.id;
      }
    });
    if (this.userId) {
      this.movieService.getWatchList(this.userId).subscribe((item) => {
        this.watchList = [...item];
      });
    }
  }

  trackByFn(index: number, item: any) {
    return item.id;
  }
}
