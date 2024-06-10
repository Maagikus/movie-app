import { Component } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, MovieCardComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
})
export class MovieListComponent {
  movieList: Movie[] = [
    {
      adult: false,
      backdrop_path: 'assets/img/Kingdom-of-the-Planet-of-the-Apes.jpeg',
      genre_ids: [878, 12, 28],
      id: 653346,
      original_language: 'en',
      original_title: 'Kingdom of the Planet of the Apes',
      overview:
        "Several generations in the future following Caesar's reign, apes are now the dominant species and live harmoniously while humans have been reduced to living in the shadows. As a new tyrannical ape leader builds his empire, one young ape undertakes a harrowing journey that will cause him to question all that he has known about the past and to make choices that will define a future for apes and humans alike.",
      popularity: 4703.624,
      poster_path: '/gKkl37BQuKTanygYQG1pyYgLVgf.jpg',
      release_date: '2024-05-08',
      title: 'Kingdom of the Planet of the Apes',
      video: false,
      vote_average: 6.932,
      vote_count: 807,
    },
    {
      adult: false,
      backdrop_path: 'assets/img/Civil-War.jpg',
      genre_ids: [10752, 28, 18],
      id: 929590,
      original_language: 'en',
      original_title: 'Civil War',
      overview:
        'In the near future, a group of war journalists attempt to survive while reporting the truth as the United States stands on the brink of civil war.',
      popularity: 2418.019,
      poster_path: '/sh7Rg8Er3tFcN9BpKIPOMvALgZd.jpg',
      release_date: '2024-04-10',
      title: 'Civil War',
      video: false,
      vote_average: 7.1,
      vote_count: 1296,
    },
    {
      adult: false,
      backdrop_path: 'assets/img/Godzilla-x-Kong-The-New-Empire.jpeg',
      genre_ids: [878, 28, 12],
      id: 823464,
      original_language: 'en',
      original_title: 'Godzilla x Kong: The New Empire',
      overview:
        'Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence – and our own.',
      popularity: 1931.335,
      poster_path: '/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg',
      release_date: '2024-03-27',
      title: 'Godzilla x Kong: The New Empire',
      video: false,
      vote_average: 7.233,
      vote_count: 2519,
    },
    {
      adult: false,
      backdrop_path: 'assets/img/Tarot.jpg',
      genre_ids: [27, 53],
      id: 719221,
      original_language: 'en',
      original_title: 'Tarot',
      overview:
        'When a group of friends recklessly violate the sacred rule of Tarot readings, they unknowingly unleash an unspeakable evil trapped within the cursed cards. One by one, they come face to face with fate and end up in a race against death.',
      popularity: 1540.535,
      poster_path: '/gAEUXC37vl1SnM7PXsHTF23I2vq.jpg',
      release_date: '2024-05-01',
      title: 'Tarot',
      video: false,
      vote_average: 6.5,
      vote_count: 341,
    },
  ];
  favoriteList: Movie[] = [];
  watchList: Movie[] = [];
  onAddToFavorites(id: number) {
    const movie = this.movieList.find((movie: Movie) => movie.id === id);
    if (movie && !this.favoriteList.includes(movie)) {
      this.favoriteList = [...this.favoriteList, movie];
    }
  }
  onAddToWatchList(id: number) {
    const movie = this.movieList.find((movie: Movie) => movie.id === id);
    if (movie && !this.watchList.includes(movie)) {
      this.watchList = [...this.watchList, movie];
    }
  }
}
