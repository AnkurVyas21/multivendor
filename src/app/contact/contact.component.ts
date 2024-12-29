import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
registeForm!:FormGroup;

  constructor(private fb:FormBuilder)
  {

  }

  ngOnInIt()
  {
    this.registeForm = this.fb.group({
      firstName:['', Validators.required,Validators.maxLength(32)],
      lastName:['',Validators.required,Validators.maxLength(32)],
      email:['',Validators.required,Validators.email,Validators.maxLength(68)],
      DOB:['',Validators.required],
      password:['',Validators.required,Validators.maxLength(32)],
      confirmPassword:['',Validators.required,Validators.maxLength(32)],
      keepSignIn:[false]
    })
  }

  registerUserFormSubmit()
  {

  }
}
