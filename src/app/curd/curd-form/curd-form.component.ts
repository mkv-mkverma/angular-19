import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CurdService } from '../services/curd.service';
import { ReusableComponentComponent } from '../../reusable-component/reusable-component.component';

@Component({
  selector: 'app-curd-form',
  imports: [ReactiveFormsModule, CommonModule, ReusableComponentComponent],
  templateUrl: './curd-form.component.html',
  styleUrl: './curd-form.component.scss',
})
export class CurdFormComponent implements OnInit {
  userDetailForm!: FormGroup;
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private curdService = inject(CurdService);
  private route = inject(ActivatedRoute);
  userId: string = '';
  mode: string = '';
  message: string = '';
  ngOnInit() {
    this.createForm();
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.userId = id && id;
    }
    this.mode = this.route.snapshot.data['mode'];
    this.message = this.displayUserMessage(this.mode);

    this.setFormValue(id);
  }

  displayUserMessage(mode: string): string {
    switch (mode) {
      case 'edit':
        return 'Update User';
      case 'view':
        return 'View User';
      default:
        return 'Add New User';
    }
  }

  setFormValue(id: string | null) {
    if (id) {
      this.curdService.getUserById(id).subscribe({
        next: (res) => {
          if (res && res.length > 0) {
            this.userDetailForm.patchValue(res[0]);
          }
        },
        error: (err) => {
          console.error(err);
        },
      });
    }
  }

  createForm() {
    this.userDetailForm = this.fb.group({
      name: [''],
      email: [''],
      aboutMe: [''],
      age: [''],
      address: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        zip: [''],
      }),
      imageUrl: [''],
    });
  }

  onSubmit() {
    console.log('Form submitted:', this.userDetailForm.value);
    if (this.mode === 'edit') {
      this.curdService
        .updateUser(this.userId, this.userDetailForm.value)
        .subscribe({
          next: (res) => {
            this.router.navigate(['/crud-app']);
          },
          error: (err) => {
            console.log(err);
          },
        });
    } else {
      // save API call
      this.curdService.addUser(this.userDetailForm.value).subscribe({
        next: (res) => {
          this.router.navigate(['/crud-app']);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }

  onCancel() {
    this.router.navigate(['/crud-app']);
  }
}
