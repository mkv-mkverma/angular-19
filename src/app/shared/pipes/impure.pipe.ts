import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impure',
  pure: false, // ← Mark as impure - re-evaluates on every change detection
})
export class ImpurePipe implements PipeTransform {
  // Simple example: filter array on every change detection
  private callCount = 0;

  transform(value: any[], filterText: string = ''): any[] {
    // TODO: Remove this log in production, it's just to demonstrate when the pipe is called
    this.callCount++;
    console.log(
      `%c⚡ Impure Pipe Called #${this.callCount}`,
      'color: orange; font-weight: bold;',
      `Filter: "${filterText}"`,
      `Items: ${value?.length || 0}`,
    );

    if (!value || !Array.isArray(value)) {
      return value;
    }

    if (!filterText) {
      return value;
    }
    return value.filter((item) =>
      JSON.stringify(item).toLowerCase().includes(filterText.toLowerCase()),
    );
  }
}
