import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss',
})
export class ReactiveFormComponent implements OnInit {
  userForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.userForm = this.fb.group({
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(10),
          Validators.pattern('^[a-zA-Z]+$'),
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(10),
          Validators.pattern('^[a-zA-Z]+$'),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      aboutMe: ['', [Validators.maxLength(200)]],
      terms: [false, [Validators.requiredTrue]],
      address: this.fb.group({
        zip: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
        city: ['', Validators.required],
        state: ['', Validators.required],
      }),
      skills: this.fb.array([]),
    });
  }

  get skills(): FormArray {
    return this.userForm.get('skills') as FormArray;
  }

  newSkill() {
    return this.fb.group({
      skillName: ['', Validators.required],
      // experience: ['', [Validators.required, Validators.min(0)]],
    });
  }

  addSkill() {
    this.skills.push(this.newSkill());
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  onSetFormValue() {
    this.userForm.setValue({
      firstName: 'Manish',
      lastName: 'Verma',
      email: 'manish@example.com',
      password: 'password123',
      aboutMe: 'I am a software developer.',
      terms: true,
      address: {
        city: 'Bangalore',
        state: 'KA',
        zip: '560001',
      },
      skills: [],
    });
  }

  onPatchFormValue() {
    this.userForm.patchValue({
      firstName: 'Manish',
    });
    // to get single value control, we can use either of below approaches:
    // this.userForm.controls['firstName'].patchValue('Manish');
  }

  onSubmitFormValue() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      this.onResetFormValue();
    } else {
      alert('Form is invalid');
    }
  }

  onResetFormValue() {
    this.userForm.reset();
  }

  get f() {
    return this.userForm.controls;
  }
}
