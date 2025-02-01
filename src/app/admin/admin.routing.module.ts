import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { TestDrivesComponent } from "./test-drives/test-drives.component";
import { AddcarsComponent } from "./addcars/addcars.component";
import { SoldcarsComponent } from "./soldcars/soldcars.component";
import { AddCarComponent } from "./add-car/add-car.component";
import { AdminAuthGuard } from "../services/authGuard/adminAuth.guard";
import { LoginComponent } from "../login/login.component";
import { CarListComponent } from "./car-list/car-list.component";
import { OfferPriceComponent } from "./offer-price/offer-price.component";
import { TransactionsComponent } from "./transactions/transactions.component";
import { VendorListComponent } from "./vendor-list/vendor-list.component";
import { CustomerListComponent } from "./customer-list/customer-list.component";

const route : Routes = [
    
          { path: 'dashboard', component: DashboardComponent },
          { path: 'test-drives', component: TestDrivesComponent },
          { path: 'add-cars', component: AddcarsComponent },
          { path: 'sold-cars', component: SoldcarsComponent },
          {
            path: 'add-car', component: AddCarComponent
          },
          {
            path: 'offer-price', component: OfferPriceComponent
          },
          {
            path: 'car-list', component: CarListComponent
          },
          {
            path: 'login', component: LoginComponent
          },
          {
            path: 'transactions', component: TransactionsComponent
          },
          {
            path: 'vendor-list', component: VendorListComponent
          },
          {
            path: 'customer-list', component: CustomerListComponent
          },
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