import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { BetterHighlighterDirective } from '../shared/directives/better-highlighter.directive';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent, BetterHighlighterDirective],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {
  message = 'message is passed from parent';
}
