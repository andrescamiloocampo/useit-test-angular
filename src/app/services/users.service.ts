import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private httpClient:HttpClient) { }

  baseUrl = 'http://localhost:3000/users'; // From json-server

  getUsers() {
    return this.httpClient.get(this.baseUrl);
  }

  getUserById(id: number) {
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }
  
}
