import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from '../profile-page/profile-page.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [ProfilePageComponent],
  imports: [CommonModule,
    MatTableModule
  ],
  exports: [ProfilePageComponent] // Exporting so other modules can use it
})
export class SharedModule { }
