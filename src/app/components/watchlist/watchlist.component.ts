import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieMiniCardComponent } from 'src/app/components/movie-mini-card/movie-mini-card.component';
import { Movie } from 'src/app/interfaces/movie';

@Component({
  selector: 'app-watchlist',
  standalone: true,
  imports: [CommonModule, MovieMiniCardComponent],
  templateUrl: './watchlist.component.html',
  styleUrl: './watchlist.component.scss',
})
export class WatchlistComponent {
  watchList: Movie[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params['data']) {
        let paramValue = JSON.parse(params['data']);
        this.watchList.push(paramValue);
      }
    });
  }

  trackByFn(index: number, item: any) {
    return item.id;
  }
}
