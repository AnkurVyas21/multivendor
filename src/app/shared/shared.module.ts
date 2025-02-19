import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from '../profile-page/profile-page.component';

@NgModule({
  declarations: [ProfilePageComponent],
  imports: [CommonModule],
  exports: [ProfilePageComponent] // Exporting so other modules can use it
})
export class SharedModule { }
