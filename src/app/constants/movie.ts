import { FilterNodes, Genre } from '../interfaces/movie';

export const genres: Genre[] = [
  {
    id: 28,
    name: 'Action',
  },
  {
    id: 12,
    name: 'Adventure',
  },
  {
    id: 16,
    name: 'Animation',
  },
  {
    id: 35,
    name: 'Comedy',
  },
  {
    id: 80,
    name: 'Crime',
  },
  {
    id: 99,
    name: 'Documentary',
  },
  {
    id: 18,
    name: 'Drama',
  },
  {
    id: 10751,
    name: 'Family',
  },
  {
    id: 14,
    name: 'Fantasy',
  },
  {
    id: 36,
    name: 'History',
  },
  {
    id: 27,
    name: 'Horror',
  },
  {
    id: 10402,
    name: 'Music',
  },
  {
    id: 9648,
    name: 'Mystery',
  },
  {
    id: 10749,
    name: 'Romance',
  },
  {
    id: 878,
    name: 'Science Fiction',
  },
  {
    id: 10770,
    name: 'TV Movie',
  },
  {
    id: 53,
    name: 'Thriller',
  },
  {
    id: 10752,
    name: 'War',
  },
  {
    id: 37,
    name: 'Western',
  },
];

export const filterNodes: FilterNodes[] = [
  {
    key: '0',
    label: 'With Genre',
    data: 'Movies with Genre',
    children: [],
  },
  {
    key: '1',
    label: 'Without Genre',
    data: 'Movies without Genre',
    children: [],
  },
  {
    key: '2',
    label: 'Sort By',
    data: 'Movies Genre',
    children: [
      {
        key: `2-0`,
        label: 'Original Title',
        data: 'original_title.asc',
      },
      {
        key: `2-1`,
        label: 'Popularity',
        data: 'popularity.asc',
      },
      {
        key: `2-2`,
        label: 'Title',
        data: 'title.asc',
      },
      {
        key: `2-3`,
        label: 'Vote Average',
        data: 'vote_average.asc',
      },
    ],
  },
];
