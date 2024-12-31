import { NgModule } from "@angular/core";
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestDrivesComponent } from './test-drives/test-drives.component';
import { AddcarsComponent } from './addcars/addcars.component';
import { AdminComponent } from "./admin.component";
import { FormsModule } from "@angular/forms";
import { adminRoutingModule } from "./admin.routing.module";
import { CommonModule } from "@angular/common";
import { SoldcarsComponent } from './soldcars/soldcars.component';

@NgModule({
    declarations:[
    DashboardComponent,
    TestDrivesComponent,
    AddcarsComponent,
    SoldcarsComponent
  ],
  imports:[
    FormsModule,
    adminRoutingModule,
    CommonModule,
    
  ]
})
export class adminModule{}