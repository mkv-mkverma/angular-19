import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate',
})
export class CustomDatePipe implements PipeTransform {
  private datePipe = new DatePipe('en-US');
  transform(value: unknown, formate: string): unknown {
    if (
      typeof value === 'string' ||
      value instanceof Date ||
      typeof value === 'number'
    ) {
      value = this.datePipe.transform(value, formate);
    }
    return value;
  }
}
