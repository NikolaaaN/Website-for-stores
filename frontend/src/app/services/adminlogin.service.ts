import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminloginService {

  constructor(private http: HttpClient) { }

  login(username, password){
    const data = {
      username: username,
      password: password,
    }

    return this.http.post("http://localhost:4000/users/adminlogin", data);
  }
}
