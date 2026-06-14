import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../../user';

@Injectable({
  providedIn: 'root',
})
export class CurdService {
  API_URL = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  fetchUsers(): Observable<Person[]> {
    return this.http.get<Person[]>(this.API_URL);
  }

  getUserById(id: any): Observable<any> {
    return this.http.get<any>(this.API_URL, id);
  }

  deleteUser(id: string | number) {
    return this.http.delete(`${this.API_URL}/${id}`);
  }

  addUser(user: Person) {
    console.log(user);
    return this.http.post<Person>(this.API_URL, user);
  }

  updateUser(id: string, user: Person) {
    return this.http.put<Person>(`${this.API_URL}/${id}`, user);
  }
}
