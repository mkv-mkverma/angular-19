import { Component, inject, OnInit } from '@angular/core';
import { CurdService } from './services/curd.service';
import { Person } from '../user';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ReusableComponentComponent } from "../reusable-component/reusable-component.component";

@Component({
  selector: 'app-curd',
  imports: [CommonModule, ReusableComponentComponent],
  templateUrl: './curd.component.html',
  styleUrl: './curd.component.scss',
})
export class CurdComponent implements OnInit {
  private curdService: CurdService = inject(CurdService);
  private router = inject(Router);

  usersList$!: Observable<Person[]>;

  ngOnInit() {
    this.usersList$ = this.curdService.fetchUsers();
  }

  createUser() {
    this.router.navigate(['/crud/create']);
  }

  viewUser(user: Person) {
    this.router.navigate([`crud/${user.id}/view`]);
  }

  editUser(user: Person) {
    this.router.navigate([`crud/${user.id}/edit`]);
  }

  deleteUser(user: Person) {
    this.curdService.deleteUser(user.id).subscribe({
      next: (res) => {
        console.log('User deleted successfully:', res);
        // Refresh the user list after deletion
        this.usersList$ = this.curdService.fetchUsers();
      },
      error: (error) => {
        console.error('Error deleting user:', error);
      },
    });
  }
}
