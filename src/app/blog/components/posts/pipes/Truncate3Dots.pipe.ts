import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'threeDots'
})
export class Truncate3Dots implements PipeTransform {

  transform(value: any, limit: number = 300, trail: string = '...'): string {
    if (!value) return '';
    return value.length > limit ? value.substring(0, limit) + trail : value;
  }

}
