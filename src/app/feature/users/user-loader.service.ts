import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLoader } from './user-loader';
import { User } from './users-container/users.model';

@Injectable({
  providedIn: 'root',
})
export class UserLoaderService implements UserLoader {
  constructor(private http: HttpClient) {}

  loadUsers() {
    console.log(`load users now...`);
    return this.http.get<User[]>(`https://jsonplaceholder.typicode.com/users`);
  }

  loadUser(id: number | string) {
    console.log(`load user now...`);
    return this.http.get<User>(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
  }
}
