import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { VendorComponent } from "./vendor/vendor.component";
import { VendorDashboardComponent } from "./vendor-dashboard/vendor-dashboard.component";
import { VendorCustomerListComponent } from "./vendor-customer-list/vendor-customer-list.component";
import { VendorCarListComponent } from "./vendor-car-list/vendor-car-list.component";
import { VendorAddCarComponent } from "./vendor-add-car/vendor-add-car.component";
import { VendorTestDrivesComponent } from "./vendor-test-drives/vendor-test-drives.component";
import { VendorOfferPriceComponent } from "./vendor-offer-price/vendor-offer-price.component";
import { VendorTransactionComponent } from "./vendor-transaction/vendor-transaction.component";
import { VendorSoldCarsComponent } from "./vendor-sold-cars/vendor-sold-cars.component";
import { VendorProfileImageComponent } from "./vendor-profile-image/vendor-profile-image.component";
import { VendorAuthGuard } from "../services/authGuard/vendorAuth.guard";
import { CustomerDetailsComponent } from "../admin/detail pages/customer-details/customer-details.component";
import { VendorCarEditComponent } from "./detail pages/vendor-car-edit/vendor-car-edit.component";
import { VendorCarDetailComponent } from "./detail pages/vendor-car-detail/vendor-car-detail.component";
import { ResetPasswordComponent } from "../reset-password/reset-password.component";


const route: Routes = [
    { path: 'dashboard', component: VendorDashboardComponent, canActivate: [VendorAuthGuard] },
    {
        path: 'customer-list', component: VendorCustomerListComponent, canActivate: [VendorAuthGuard]
    },
    {
        path: 'customer-details/:id', component: CustomerDetailsComponent, canActivate: [VendorAuthGuard]
    },
    {
        path: 'car-list', component: VendorCarListComponent, canActivate: [VendorAuthGuard]
    },
    {
        path: 'add-cars', component: VendorAddCarComponent, canActivate: [VendorAuthGuard]
    },
    { path: 'test-drives', component: VendorTestDrivesComponent, canActivate: [VendorAuthGuard] },
    {
        path: 'offer-price', component: VendorOfferPriceComponent, canActivate: [VendorAuthGuard]
    },
    {
        path: 'sold-cars', component: VendorSoldCarsComponent, canActivate: [VendorAuthGuard]
    },
    {
        path: 'transactions', component: VendorTransactionComponent, canActivate: [VendorAuthGuard]
    },
    {
        path: 'profile', component: VendorProfileImageComponent, canActivate: [VendorAuthGuard]
    },
    {
        path: 'vendor', component: VendorComponent, canActivate: [VendorAuthGuard]
    },
    {
        path: 'car-edit/:id', component: VendorCarEditComponent, canActivate: [VendorAuthGuard]
    },
    {
        path: 'car-detail/:id', component: VendorCarDetailComponent, canActivate: [VendorAuthGuard]
    },
    {
        path: 'reset-password', component: ResetPasswordComponent, canActivate: [VendorAuthGuard]
    },
    { path: '**', redirectTo: '/vendor/dashboard', pathMatch: 'full' },

]

@NgModule({
    imports: [
        RouterModule.forChild(route)
    ],
    exports: [
        RouterModule
    ]
})

export class vendorRoutingModule { }