import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute,RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { UsersService } from '../../services';
import { User } from '../../models/User.model';

@Component({
  selector: 'app-user-detail',
  imports: [MatIcon,RouterLink],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent implements OnInit{
  private usersService: UsersService = inject(UsersService);
  private route: ActivatedRoute = inject(ActivatedRoute);
  protected user: User | null = null;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.usersService.getUserById(id).subscribe((data: any) => {
      this.user = data;
    });
  }
}
