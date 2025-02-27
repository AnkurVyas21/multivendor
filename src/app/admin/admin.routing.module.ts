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
import { VendorDetailsComponent } from "./detail pages/vendor-details/vendor-details.component";
import { CustomerDetailsComponent } from "./detail pages/customer-details/customer-details.component";
import { ProfileImageComponent } from "./profile-image/profile-image.component";
import { CarEditComponent } from "./detail pages/car-edit/car-edit.component";
import { CarDetailsComponent } from "./detail pages/car-details/car-details.component";

const route: Routes = [

  { path: 'dashboard', component: DashboardComponent, canActivate: [AdminAuthGuard] },
  { path: 'test-drives', component: TestDrivesComponent, canActivate: [AdminAuthGuard] },
  { path: 'add-cars', component: AddcarsComponent, canActivate: [AdminAuthGuard] },
  { path: 'sold-cars', component: SoldcarsComponent, canActivate: [AdminAuthGuard] },
  {
    path: 'add-car', component: AddCarComponent, canActivate: [AdminAuthGuard]
  },


  {
    path: 'offer-price', component: OfferPriceComponent, canActivate: [AdminAuthGuard]
  },
  {
    path: 'car-list', component: CarListComponent, canActivate: [AdminAuthGuard]
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'transactions', component: TransactionsComponent, canActivate: [AdminAuthGuard]
  },
  {
    path: 'vendor-list', component: VendorListComponent, canActivate: [AdminAuthGuard]
  },
  {
    path: 'customer-list', component: CustomerListComponent, canActivate: [AdminAuthGuard]
  },

  {
    path: 'vendor-details/:id', component: VendorDetailsComponent, canActivate: [AdminAuthGuard]
  },

  {
    path: 'customer-details/:id', component: CustomerDetailsComponent, canActivate: [AdminAuthGuard]
  },
  {
    path: 'profile', component: ProfileImageComponent, canActivate: [AdminAuthGuard]
  },
  {
    path: 'car-edit/:id', component: CarEditComponent, canActivate: [AdminAuthGuard]
  },
  {
    path: 'car-detail/:id', component: CarDetailsComponent, canActivate: [AdminAuthGuard]
  },
  // {
  //   path: 'profile', component: profileComponent
  // },
  { path: '**', redirectTo: '/admin/dashboard', pathMatch: 'full' },
]

@NgModule({
  imports: [
    RouterModule.forChild(route)
  ],
  exports: [
    RouterModule
  ]
})

export class adminRoutingModule { }