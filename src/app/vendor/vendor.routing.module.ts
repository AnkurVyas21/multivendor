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


const route: Routes = [
    { path: 'dashboard', component: VendorDashboardComponent },
    {
        path: 'customer-list', component: VendorCustomerListComponent
    },
    {
        path: 'car-list', component: VendorCarListComponent
    },
    {
        path: 'add-cars', component: VendorAddCarComponent
    },
    { path: 'test-drives', component: VendorTestDrivesComponent },
    {
        path: 'offer-price', component: VendorOfferPriceComponent
    },
    {
        path: 'sold-cars', component: VendorSoldCarsComponent
    },
    {
        path: 'transactions', component: VendorTransactionComponent
    },
    {
        path: 'vendor', component: VendorComponent
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