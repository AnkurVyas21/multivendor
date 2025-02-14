import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { vendorRoutingModule } from './vendor.routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { VendorComponent } from './vendor/vendor.component';
import { VendorDashboardComponent } from './vendor-dashboard/vendor-dashboard.component';
import { VendorCustomerListComponent } from './vendor-customer-list/vendor-customer-list.component';
import { VendorCarListComponent } from './vendor-car-list/vendor-car-list.component';
import { VendorAddCarComponent } from './vendor-add-car/vendor-add-car.component';
import { VendorTestDrivesComponent } from './vendor-test-drives/vendor-test-drives.component';
import { VendorOfferPriceComponent } from './vendor-offer-price/vendor-offer-price.component';
import { VendorTransactionComponent } from './vendor-transaction/vendor-transaction.component';
import { adminModule } from '../admin/admin.module';

@NgModule({
  declarations: [ VendorDashboardComponent, VendorCustomerListComponent, VendorCarListComponent, VendorAddCarComponent, VendorTestDrivesComponent, VendorOfferPriceComponent, VendorTransactionComponent],
  imports: [
    CommonModule,
    vendorRoutingModule,
    MatSidenavModule,
    adminModule
  ]
})
export class VendorModule { }
