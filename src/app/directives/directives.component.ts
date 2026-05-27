/**
 * component directives => used to create reusable components => @Component
 * structural directives => changes the structure of the DOM => *ngIf, *ngFor, *ngSwitch
 * attribute directives => changes the appearance or behavior of an element, component, or another directive => ngClass, ngStyle, ngModel
 */

import { Component } from '@angular/core';

// component decorator (also know as component directives) with metadata
@Component({
  selector: 'app-directives',
  imports: [],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss',
})
export class DirectivesComponent {}
