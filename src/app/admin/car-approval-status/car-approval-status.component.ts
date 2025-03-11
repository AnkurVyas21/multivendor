import { AfterViewInit, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface CarData {
  name: string;
  uploadDate: string;
  status: string;
  reason?: string;
}

const CAR_DATA: CarData[] = [
  { name: 'Ford Mustang 2020', uploadDate: '2025/02/27', status: 'Rejected', reason: 'Incomplete Documents' },
  { name: 'Honda Civic 2021', uploadDate: '2025/02/28', status: 'Approved' },
  { name: 'Honda Civic 2021', uploadDate: '2025/02/28', status: 'Approved' },
  { name: 'Honda Civic 2021', uploadDate: '2025/02/28', status: 'Approved' },
  { name: 'Toyota Camry 2022', uploadDate: '2025/03/01', status: 'Pending' },
];


@Component({
  selector: 'app-car-approval-status',
  templateUrl: './car-approval-status.component.html',
  styleUrls: ['./car-approval-status.component.css','../../../assets/css/modern.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CarApprovalStatusComponent  implements AfterViewInit {
  displayedColumns: string[] = ['name', 'uploadDate', 'status', 'reason', 'actions'];
  dataSource = new MatTableDataSource<CarData>(CAR_DATA);
  public activeLoader = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    setTimeout(() => {
      this.activeLoader = false;
    }, 1500);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  viewDetails(element: CarData) {
    alert(`Viewing details for: ${element.name}`);
  }
}