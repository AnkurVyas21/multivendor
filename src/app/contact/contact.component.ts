import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpServiceService } from '../services/http-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  buyCarForm: FormGroup;

  constructor(private fb: FormBuilder,private httpService:HttpServiceService) {
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
      console.log('Form Submitted:');
    if (this.buyCarForm.valid) {
      this.httpService.contactUS(this.buyCarForm.get('message')?.value).subscribe((value)=>{
        console.log('contact is done')
      },(error)=>{
        console.log('error')
      })
    } else {
      console.log('Form is not valid');
    }
  }
}