import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'topRate',
  standalone: true
})
export class TopRatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
