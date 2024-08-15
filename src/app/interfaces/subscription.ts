import { Genre } from './movie';

export interface SubscriptionData {
  name: string;
  email: string;
  birthYear: string;
  genre: Genre[];
}
