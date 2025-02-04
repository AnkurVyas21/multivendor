import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us-banner',
  templateUrl: './contact-us-banner.component.html',
  styleUrls: ['./contact-us-banner.component.css']
})
export class ContactUsBannerComponent {

  buyCarForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialize the form with validations
    this.buyCarForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]], // Assuming phone numbers are 10 digits
      message: ['', Validators.required]
    });
  }

  // Form submit handler
  onSubmit() {
    if (this.buyCarForm.valid) {
      console.log('Form Submitted:', this.buyCarForm.value);
      // You can perform any action like sending this data to the backend
    } else {
      console.log('Form is not valid');
    }
  }
}