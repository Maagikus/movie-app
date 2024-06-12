import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textTruncate',
  standalone: true,
})
export class TextTruncatePipe implements PipeTransform {
  transform(value: string): string {
    const MAX_LENGTH = 100;
    if (value.length < MAX_LENGTH) return value;
    const truncatedString = value.substring(0, MAX_LENGTH);
    const lastSpaceIndex = truncatedString.lastIndexOf(' ');

    return lastSpaceIndex === -1 ?
      truncatedString :
      truncatedString.substring(0, lastSpaceIndex) + '...';
  }
}
