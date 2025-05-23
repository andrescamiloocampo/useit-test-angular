import { Component, inject, OnInit, signal, PLATFORM_ID, Inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { UsersService } from '../../../services';
import { User } from '../../../models/User.model';
import { AuthService } from '../../../services/auth.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [MatIcon, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  protected user: User | null = null;
  private usersService: UsersService = inject(UsersService);
  private authService: AuthService = inject(AuthService);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const id = localStorage.getItem('token') ?? 0;
      this.usersService.getUserById(+id).subscribe((data: any) => {
        this.user = data;
      });
    }
  }

  logout() {
    this.authService.logout();
  }
}
