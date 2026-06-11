import { Component, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ProfileService } from '../shared/services/profile.service';
import { UserProfile } from '../user';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, AsyncPipe],
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  localUsers: UserProfile[] = [];
  users$!: Observable<any[]>;
  constructor(public profileService: ProfileService) {}

  ngOnInit() {
    this.getLocalUsers();
    this.getUserDetails();
  }

  getLocalUsers() {
    this.localUsers = this.profileService.users;
  }

  getUserDetails() {
    this.users$ = this.profileService.fetchUsers();
  }
}
