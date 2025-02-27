import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from '../profile-page/profile-page.component';
import { MatTableModule } from '@angular/material/table';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';

@NgModule({
  declarations: [ProfilePageComponent,ResetPasswordComponent],
  imports: [CommonModule,
    MatTableModule
  ],
  exports: [ProfilePageComponent,ResetPasswordComponent] // Exporting so other modules can use it
})
export class SharedModule { }
