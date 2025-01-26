import { NgModule } from "@angular/core";
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestDrivesComponent } from './test-drives/test-drives.component';
import { AddcarsComponent } from './addcars/addcars.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { adminRoutingModule } from "./admin.routing.module";
import { CommonModule } from "@angular/common";
import { SoldcarsComponent } from './soldcars/soldcars.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button'
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AdminDialogComponent } from './admin-dialog/admin-dialog.component';
import { MatSelectModule } from '@angular/material/select';  
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations:[
    DashboardComponent,
    TestDrivesComponent,
    AddcarsComponent,
    SoldcarsComponent,
    AdminDialogComponent,
  ],
  imports:[
    FormsModule,
    adminRoutingModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatSidenavModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCheckboxModule, 
    MatIconModule
  ]
})
export class adminModule{}