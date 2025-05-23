import { Component, inject, OnInit } from '@angular/core';
import { UsersTableComponent } from '../../components/sections';
import { UsersService } from '../../services';
import { User } from '../../models/User.model';

@Component({
  selector: 'app-dashboard',
  imports: [UsersTableComponent],
  providers: [UsersService],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  private usersService: UsersService = inject(UsersService);
  protected users: User[] = [];
  protected dataReady: boolean = false;

  ngOnInit() {
    this.usersService.getUsers().subscribe((data: any) => {
      this.users = data;
      this.dataReady = !!data;
    });
  }
}
