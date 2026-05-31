import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mobile',
})
export class MobilePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    if (value === '' || value === null || value === undefined) {
      return 'NA';
    }
    value = `+91 ${value}`;
    return value;
  }
}
