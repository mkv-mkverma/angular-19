import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-driven-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.scss',
})
export class TemplateDrivenFormComponent implements OnInit {
  userObject: User = {};

  constructor() {}

  ngOnInit() {
    // this.userObject = {
    //   firstName: 'Manish',
    //   lastName: 'Verma',
    //   email: 'manish@example.com',
    //   password: '123456',
    //   aboutMe: 'I am manish, a software developer with a passion for learning new technologies.',
    //   terms: false,
    // };
  }

  onSubmitUserForm(userForm: NgForm) {
    console.log('User Form Data:', this.userObject);
    console.log('User Form Object:', userForm);
    console.log('User Form Value:', userForm.value);
    if (userForm.valid) {
      alert('Form Submitted Successfully!');
      // For Template-Driven Forms, resetForm() is preferred because it resets both the form values and the form state (dirty, touched, submitted, validation state), whereas reset() mainly resets the values.
      // userForm.reset();
      // userForm.resetForm();
      this.resetForm(userForm);
    } else {
      alert('Please fill out the form correctly before submitting.');
    }
  }

  setValues(userForm: NgForm) {
    let obj: User = {
      firstName: 'Manish',
      lastName: 'Verma',
      email: 'manish@example.com',
      password: '123456',
      aboutMe:
        'I am manish, a software developer with a passion for learning new technologies.',
      terms: false,
    };
    userForm.form.setValue(obj);
  }

  patchValues(userForm: NgForm) {
    let obj: Partial<User> = {
      firstName: 'Puja',
      lastName: 'Mishra',
    };
    userForm.form.patchValue(obj);
  }

  resetForm(userForm: NgForm) {
    userForm.resetForm();
    // userForm.form.reset();
  }
}
