import { Component } from '@angular/core';

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

 constructor() { }

 ngOnInit(): void {
   // Here, you can call a service to get real data from an API
 }
}
