import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { TestDrivesComponent } from "./test-drives/test-drives.component";
import { AddcarsComponent } from "./addcars/addcars.component";
import { SoldcarsComponent } from "./soldcars/soldcars.component";

const route : Routes = [
    
          { path: 'dashboard', component: DashboardComponent },
          { path: 'test-drives', component: TestDrivesComponent },
          { path: 'add-cars', component: AddcarsComponent },
          { path: 'sold-cars', component: SoldcarsComponent },
          { path: '', redirectTo: '/admin/dashboard', pathMatch: 'full' },
          { path: '**', redirectTo: '/admin/dashboard', pathMatch: 'full' },
]

@NgModule({
    imports:[
        RouterModule.forChild(route)
    ],
    exports:[
        RouterModule
    ]
})

export class adminRoutingModule { }