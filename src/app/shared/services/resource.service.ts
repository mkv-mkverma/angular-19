import { HttpClient } from '@angular/common/http';
import { inject, Injectable, resource } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { IUser } from '../../user';

@Injectable({
  providedIn: 'root',
})
export class ResourceService {
  // BASE_URL = 'https://fake-store-api.mock.beeceptor.com/api/users'
  BASE_URL = 'https://fake-store-api.mock.beeceptor.com';
  constructor() {}

  private http = inject(HttpClient);

  getAllUsers() {
    return this.http.get<IUser[]>(`${this.BASE_URL}/api/users`);
  }

  rxResourceData = rxResource({
    loader: () => this.http.get<IUser[]>(`${this.BASE_URL}/api/users`),
  });

  resourceData = resource({
    loader: async () => {
      const res = await fetch(`${this.BASE_URL}/api/users`);
      return (await res.json()) as IUser[];
    },
  });
}
