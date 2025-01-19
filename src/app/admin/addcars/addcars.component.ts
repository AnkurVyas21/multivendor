import { Router } from '@angular/router';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AdminDialogComponent } from '../admin-dialog/admin-dialog.component';

interface CarSale {
  userId: number;
  userName: string;
  carModel: string;
  carAddedTime: string;
}

@Component({
  selector: 'app-addcars',
  templateUrl: './addcars.component.html',
  styleUrls: ['./addcars.component.css']
})
export class AddcarsComponent {

  searchQuery: string = '';
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator ;
  displayedColumns: string[] = ['userId', 'userName', 'carModel', 'carAddedTime'];
  carSales = [
    { userId: 1, userName: 'John Doe', carModel: 'Tesla Model 3', carAddedTime: '2024-12-30 10:00 AM' },
    { userId: 2, userName: 'Jane Smith', carModel: 'Ford Mustang', carAddedTime: '2024-12-29 4:30 PM' },
    { userId: 2, userName: 'Jane Smith', carModel: 'Ford Mustang', carAddedTime: '2024-12-29 4:30 PM' },
    { userId: 2, userName: 'Jane Smith', carModel: 'Ford Mustang', carAddedTime: '2024-12-29 4:30 PM' },
    { userId: 2, userName: 'Jane Smith', carModel: 'Ford Mustang', carAddedTime: '2024-12-29 4:30 PM' },
    { userId: 2, userName: 'Jane Smith', carModel: 'Ford Mustang', carAddedTime: '2024-12-29 4:30 PM' },
    { userId: 2, userName: 'Jane Smith', carModel: 'Ford Mustang', carAddedTime: '2024-12-29 4:30 PM' },
    { userId: 2, userName: 'Jane Smith', carModel: 'Ford Mustang', carAddedTime: '2024-12-29 4:30 PM' },
    { userId: 2, userName: 'Jane Smith', carModel: 'Ford Mustang', carAddedTime: '2024-12-29 4:30 PM' },
    { userId: 2, userName: 'Jane Smith', carModel: 'Ford Mustang', carAddedTime: '2024-12-29 4:30 PM' },
    { userId: 2, userName: 'Jane Smith', carModel: 'Ford Mustang', carAddedTime: '2024-12-29 4:30 PM' },
    { userId: 2, userName: 'Jane Smith', carModel: 'Ford Mustang', carAddedTime: '2024-12-29 4:30 PM' },
  ];
  filteredCarSales = this.carSales;

  constructor(private dialog:MatDialog)
  {

  }

  onSearch() {
    const query = this.searchQuery.toLowerCase();
    this.filteredCarSales = this.carSales.filter(
      (car) =>
        car.userName.toLowerCase().includes(query) ||
        car.carModel.toLowerCase().includes(query) ||
        car.userId.toString().includes(query)
    );
  }


  addCar() {

  //  const dialogRef =  this.dialog.open(AdminDialogComponent,{
  //   data:{type:'addCar'},
  //   width: '500px',
  //   height: '800px',
  //   disableClose: false,
  //   hasBackdrop: true,
  //   autoFocus: true,
  //  })

  //  dialogRef.afterClosed().subscribe(result=>{
  //   console.log('addCar', result)
  //  })
   
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.filteredCarSales);
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
