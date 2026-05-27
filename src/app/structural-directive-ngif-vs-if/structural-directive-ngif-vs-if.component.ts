import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directive-ngif-vs-if',
  imports: [CommonModule, FormsModule], // No CommonModule required for @if structural directive but required for *ngIf structural directive
  templateUrl: './structural-directive-ngif-vs-if.component.html',
  styleUrl: './structural-directive-ngif-vs-if.component.scss',
})
export class StructuralDirectiveNgifVsIfComponent {
  isTermsAndCondAccepted: boolean = false;

  isInputVisible: boolean = true;

  password: string = '';
  confirmPassword: string = '';

  onClickTermsAndCond() {
    this.isTermsAndCondAccepted = !this.isTermsAndCondAccepted;
  }

  onShowInput() {
    this.isInputVisible = true;
  }
  onHideInput() {
    this.isInputVisible = false;
  }
}
