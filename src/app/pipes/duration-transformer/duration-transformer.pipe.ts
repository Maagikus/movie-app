import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'durationTransformer',
  standalone: true,
})
export class DurationTransformerPipe implements PipeTransform {
  transform(value: number): string {
    const hour = Math.floor(value / 60);
    const minute = value % 60;
    const seconds = minute % 60;
    const formattedHours = this.transformToCorrectFormat(hour);
    const formattedMinutes = this.transformToCorrectFormat(minute);
    const formattedSeconds = this.transformToCorrectFormat(seconds);

    return hour > 0
      ? `${formattedHours}:${formattedMinutes}:${formattedSeconds}`
      : `${formattedMinutes}:${formattedSeconds}`;
  }

  private transformToCorrectFormat(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }
}
