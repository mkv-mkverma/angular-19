import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  signal,
} from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss',
  // disable change detection for this component as signals are used to manage state and trigger updates
  changeDetection: ChangeDetectionStrategy.OnPush,
  // changeDetection: ChangeDetectionStrategy.Default,
})
export class SignalsComponent {
  counter = signal(0);

  normalVariable = 0;

  constructor() {
    this.counter.set(5);
    this.autoIncrement();

    // execute a side effect whenever the signal changes
    effect(() => {
      // if you dont pass any singnals it will never be called
      console.log('Counter Value Changed:', this.counter());
    });
  }

  increment() {
    this.counter.update((value) => value + 1);
  }

  decrement() {
    this.counter.update((value) => value - 1);
  }

  reset() {
    this.counter.set(0);
  }

  autoIncrement() {
    /**
     * With OnPush, normalVariable alone does not trigger change detection, but this.counter.set(50) marks the component dirty and causes the whole template (including normalVariable) to refresh.
     */
    setTimeout(() => {
      this.normalVariable = 50;
      // this.counter.set(50);
      console.log('Normal Variable:', this.normalVariable);
    }, 1000);
  }
}

// const counter = new BehaviorSubject(0);
// const double = counter.pipe(map((v: number) => v * 2));

// signals;

// const counterSignal = signal(0);
// const doubleSignal = computed(() => counterSignal() * 2);

// OnPush does not mean "never update." It means Angular only checks the component when:

// an @Input() changes,
// an event handler runs,
// an observable/async callback completes inside Angular zone,
// or a signal/markForCheck() triggers it.
