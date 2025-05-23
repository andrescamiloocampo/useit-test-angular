import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../../../services';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [MatIconModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent{
  constructor(private usersService: UsersService, private authService: AuthService, private router: Router) {}
  protected usernameCtl = new FormControl('');
  protected passwordCtl = new FormControl('');
  protected passwordVisible = false;
  protected loginError: string | null = null;

  login() {
    const username = this.usernameCtl.value ?? '';
    const password = this.passwordCtl.value ?? '';
    this.authService.login(username, password).subscribe((success) => {
      if (success) {
        this.router.navigate(['/dashboard']);
      } else {
        this.loginError = 'Usuario o contraseña incorrectos';
      }
    });
  }

  togglePasswordVisibility(){
    this.passwordVisible = !this.passwordVisible;
  }
}
