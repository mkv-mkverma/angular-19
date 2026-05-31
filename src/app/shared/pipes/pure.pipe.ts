import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pure',
})
export class PurePipe implements PipeTransform {
  transform(value: unknown): unknown {
    value = typeof value === 'number' ? value * value : null;
    return value;
  }
}
