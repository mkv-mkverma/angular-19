import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directives',
  imports: [CommonModule, FormsModule],
  templateUrl: './attribute-directives.component.html',
  styleUrl: './attribute-directives.component.scss',
})
export class AttributeDirectivesComponent {
  textColor: string = 'text-success';

  isTextGreen: boolean = false;
  isTextOrange: boolean = false;

  customClass: string = 'text-success';

  styleColor: string = 'orange';

  changeTextColor(color: string) {
    this.textColor = color;
  }

  updateColour(color: string) {
    this.styleColor = color;
  }
}
