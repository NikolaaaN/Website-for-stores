import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  uri = 'http://localhost:4000';

  login(username, password) {
    console.log(username + password);
    const data = {
      username: username,
      password: password,
    };

    return this.http.post(`${this.uri}/users/login`, data);
  }
}
