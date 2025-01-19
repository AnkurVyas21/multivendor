import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent {

  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      city: [''],
      state: [''],
      country: [''],
    });
  }

  saveChanges() {
    if (this.profileForm.valid) {
      console.log('Form Data:', this.profileForm.value);
      // Code to save changes (e.g., API call)
    } else {
      console.error('Form is invalid');
    }
  }

  cancelChanges() {
    this.profileForm.reset();
  }

  changePicture() {
    console.log('Change profile picture clicked');
    // Logic for changing profile picture
  }
}
