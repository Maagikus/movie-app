import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { MovieMiniCardComponent } from 'src/app/components/movie-mini-card/movie-mini-card.component';
import { Movie } from 'src/app/interfaces/movie';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, MovieMiniCardComponent],
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  favorites: Movie[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params['data']) {
        let paramValue = JSON.parse(params['data']);
        this.favorites.push(paramValue);
      }
    });
  }
  trackByFn(index: number, item: any) {
    return item.id;
  }
}
