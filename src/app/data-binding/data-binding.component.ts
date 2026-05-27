import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  // standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent {
  name: string = 'Angular 19';
  topic: string = 'Data Binding';
  text: string = '';
  imageUrl: string =
    'https://angular.io/assets/images/logos/angular/angular.svg';

  onButtonClick() {
    alert('Button Clicked!');
  }

  OnCountryChnage() {
    alert('Country Changed!');
  }
}
