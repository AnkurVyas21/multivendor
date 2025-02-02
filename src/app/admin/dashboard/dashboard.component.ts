import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminDialogComponent } from '../admin-dialog/admin-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
 // Mock data for the dashboard
 totalCarBuy: number = 120;     // Example value for total car buys
 totalTestDrives: number = 85;  // Example value for total test drives
 totalUsers: number = 500;      // Example value for total users

 constructor(private dialog:MatDialog) { }

 ngOnInit(): void {
   // Here, you can call a service to get real data from an API
 }

 openImageDialog(type:string)
 {
    const dialogRef =  this.dialog.open(AdminDialogComponent,{
    data:{type:type},
    width:'700px',
    height: '400px',
   })

   dialogRef.afterClosed().subscribe(result=>{
    console.log('addCar', result)
   })
 }

 

}
