import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-skeleton',
  templateUrl: './table-skeleton.component.html',
  styleUrls: ['./table-skeleton.component.scss']
})
export class TableSkeletonComponent {
  rows: number[] = Array(5).fill(0);
  cols: number[] = Array(7).fill(0);
}
