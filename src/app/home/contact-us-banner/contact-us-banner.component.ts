import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-contact-us-banner',
  templateUrl: './contact-us-banner.component.html',
  styleUrls: ['./contact-us-banner.component.css']
})
export class ContactUsBannerComponent {

  buyCarForm: FormGroup;

  constructor(private fb: FormBuilder, private HttpService:HttpServiceService) {
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
      this.HttpService.contactUS(this.buyCarForm.get('message')?.value).subscribe((value)=>{
          console.log('contact is done')
      },(error)=>{
        console.log('error')
      })
      
    } else {
      console.log('Form is not valid');
    }
  }
}