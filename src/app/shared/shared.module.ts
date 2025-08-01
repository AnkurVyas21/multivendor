import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from '../profile-page/profile-page.component';
import { MatTableModule } from '@angular/material/table';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListingdetailsComponent } from '../listingdetails/listingdetails.component';

@NgModule({
  declarations: [ProfilePageComponent,ResetPasswordComponent,ListingdetailsComponent],
  imports: [CommonModule,
    MatTableModule,
    ReactiveFormsModule
  ],
  exports: [ProfilePageComponent,ResetPasswordComponent,ListingdetailsComponent] // Exporting so other modules can use it
})
export class SharedModule { }
