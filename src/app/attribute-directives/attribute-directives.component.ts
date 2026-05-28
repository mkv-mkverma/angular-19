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

  customStyle = {
    color: 'purple',
    'font-size': '20px',
    border: '1px solid black',
    padding: '10px',
    width: 'fit-content',
    borderRadius: '5px',
    'box-shadow': '2px 2px 5px rgba(0, 0, 0, 0.3)',
  };

  changeTextColor(color: string) {
    this.textColor = color;
  }

  updateColour(color: string) {
    this.styleColor = color;
  }
}
