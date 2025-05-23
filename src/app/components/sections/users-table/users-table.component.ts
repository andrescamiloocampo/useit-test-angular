import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TableSkeletonComponent } from '../../molecules';
import { User } from '../../../models/User.model';

@Component({
  selector: 'app-users-table',
  standalone: true,
  imports: [CommonModule, RouterModule,TableSkeletonComponent],
  templateUrl: './users-table.component.html',
  styleUrl: './users-table.component.scss'
})
export class UsersTableComponent {
  @Input() users:User[] = [];
  @Input() dataReady: boolean = false;  
}
