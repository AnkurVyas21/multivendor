import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { SnackbarService } from 'src/app/snackBar/services/snackbar.service';

@Component({
  selector: 'app-contact-us-banner',
  templateUrl: './contact-us-banner.component.html',
  styleUrls: ['./contact-us-banner.component.css']
})
export class ContactUsBannerComponent {

  buyCarForm: FormGroup;

  constructor(private fb: FormBuilder, private HttpService: HttpServiceService, private snackbar:SnackbarService) {
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
    console.log(this.buyCarForm,'this.buyCarForm')
    if(this.buyCarForm.invalid)
    {
      this.buyCarForm.markAllAsTouched()
    }
    if (this.buyCarForm.valid) {
      let now = new Date()
      console.log('Form Submitted:', this.buyCarForm.value);
      let payload = {
        "id": localStorage.getItem('vendorId') ? localStorage.getItem('vendorId') : localStorage.getItem('userId'),
        "name": this.buyCarForm.get('fullName')?.value,
        "email": this.buyCarForm.get('email')?.value,
        "phone": this.buyCarForm.get('phone')?.value,
        "message": this.buyCarForm.get('message')?.value,
        "createTime": now.toISOString(),
        "updateTime":now.toISOString(),
      }
      this.HttpService.contactUS(payload).subscribe((value) => {
       this.snackbar.show('your message sent successfully', 5000, 'success')
      }, (error) => {
        this.snackbar.show('something went wrong', 5000, 'error')
      })

    } else {
      console.log('Form is not valid');
    }
  }
}