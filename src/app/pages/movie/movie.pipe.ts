import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movie',
  standalone: true
})
export class MoviePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
