import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nowPlaying',
  standalone: true
})
export class NowPlayingPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
