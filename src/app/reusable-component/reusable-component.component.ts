import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reusable-component',
  imports: [],
  templateUrl: './reusable-component.component.html',
  styleUrl: './reusable-component.component.scss',
})
export class ReusableComponentComponent {
  @Input() message: string = 'User Details';
}
