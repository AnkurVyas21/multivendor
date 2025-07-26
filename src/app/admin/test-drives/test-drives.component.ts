import { Component, AfterViewInit, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { AdminDialogComponent } from '../admin-dialog/admin-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs5';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

export interface CarData {
  leadId:string;
  carId: string;
  customerName: string;
  carModel: string;
  status:string;
}

@Component({
  selector: 'app-test-drives',
  templateUrl: './test-drives.component.html',
  styleUrls: ['./test-drives.component.css','../../../assets/css/modern.css'],
  encapsulation: ViewEncapsulation.None,
})

export class TestDrivesComponent { 
  
  public carList:any[] = [{}]


constructor(private httpService:HttpServiceService, private route:Router, private dialog:MatDialog)
{

}

searchQuery: string = '';

public activeLoader = true;

displayedColumns: string[] = ['id', 'carId', 'userName', 'carTitle', 'status','createdAt', 'actions'];
dataSource = new MatTableDataSource<CarData>(this.carList);

@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;




ngOnInit()
{
  
  this.getTestDrive()
  setTimeout(() => {
    this.activeLoader = false;
  }, 1500);
}

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
    alert(`Viewing details for: ${element.customerName}`);
  }
  getTestDrive() {
    let userType = localStorage.getItem('userType');
  if(userType == 'admin')
  {
   this.httpService.getTestDriveAdmin('pending').subscribe((data) => {
      this.carList = data;
this.dataSource = new MatTableDataSource<CarData>(this.carList);

    });
  }
  if(userType == 'vendor')
  {
    this.httpService.getTestDriveVendor().subscribe((data) => {
      this.carList = data;
this.dataSource = new MatTableDataSource<CarData>(this.carList);

    });
  }
    
  }

  approve(element: any) {
    this.openDialog('approveTestDrive',element)
  }

  decline(element: any) {
    this.openDialog('declineTestDrive',element)
  }

  openDialog(type:string,id:any)
   {
      const dialogRef =  this.dialog.open(AdminDialogComponent,{
      data:{type:type},
      width:'450px',
     })
  
     dialogRef.afterClosed().subscribe(result=>{
      console.log('addCar', type)
      if(result == 'yes')
      {
        if(type == 'declineTestDrive')
        {

          this.httpService.declineTestDrive(id).subscribe((value:any)=>{
            this.getTestDrive()
          })
        }
        else if (type == 'approveTestDrive')
        {
        this.httpService.approveTestDrive(id).subscribe((value:any)=>{
          this.getTestDrive()
        })
      }
     }})
   }

}
  








































  

