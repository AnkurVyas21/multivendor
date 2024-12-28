import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

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
