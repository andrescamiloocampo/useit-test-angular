import { Injectable } from "@angular/core";
import { UsersService } from "./users.service";
import { Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
  constructor(private usersService: UsersService, private router: Router) { }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  login(username: string, password: string): Observable<boolean> {
    return this.usersService.getUsers().pipe(
      map((usersObj: any) => {
        const users = Array.isArray(usersObj) ? usersObj : (usersObj.users || usersObj);
        const user = users.find((u: any) => u.username === username && u.password === password);
        if (user) {
          localStorage.setItem('token', user.id.toString());
          return true;
        } else {
          return false;
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}