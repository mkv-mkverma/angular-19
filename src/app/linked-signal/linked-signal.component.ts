import {
  Component,
  computed,
  linkedSignal,
  signal,
  WritableSignal,
} from '@angular/core';

@Component({
  selector: 'app-linked-signal',
  imports: [],
  templateUrl: './linked-signal.component.html',
  styleUrl: './linked-signal.component.scss',
})
export class LinkedSignalComponent {
  amount: WritableSignal<number> = signal(0);
  isAdditionalDiscountApplied = signal(false);

  constructor() {
    this.amount.set(100);
  }

  // computed signal that derives its value from the amount signal and its readonly but linked signal that is both readable and writable
  // discountedAmount = computed(() => this.amount() * 0.9);
  discountedAmount = linkedSignal(() => this.amount() * 0.9);

  additionalDiscount() {
    if (!this.isAdditionalDiscountApplied()) {
      this.discountedAmount.set(this.discountedAmount() * 0.9);
      this.isAdditionalDiscountApplied.set(true);
    }
  }
}
