import { Injectable } from '@angular/core';
import { UserProfile } from '../../user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  API_URL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  users: UserProfile[] = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      aboutMe:
        'Software developer with a passion for learning new technologies.',
      age: 30,
      imageUrl: '/user-profile-avatar.png',
      address: { city: 'New York', state: 'NY', zip: '10001' },
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      aboutMe: 'Product manager focused on user experience.',
      age: 28,
      imageUrl: '/user-profile-avatar.png',
      address: { city: 'San Francisco', state: 'CA', zip: '94102' },
    },
    {
      firstName: 'Mike',
      lastName: 'Johnson',
      email: 'mike.j@example.com',
      aboutMe: 'Full-stack developer and open-source enthusiast.',
      age: 16,
      imageUrl: '/user-profile-avatar.png',
      address: { city: 'Austin', state: 'TX', zip: '78701' },
    },
  ];

  isEligibleForSubcription(user: UserProfile): boolean {
    return user.age !== undefined && user.age >= 18;
  }

  fetchUsers() {
    // Simulate fetching users from an API
    return this.http.get<any[]>(this.API_URL);
  }
}
