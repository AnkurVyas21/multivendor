import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpServiceService } from '../services/http-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registeForm!:FormGroup;

  constructor(private fb:FormBuilder, private httpService:HttpServiceService, private route:ActivatedRoute)
  {

  }

  ngOnInit()
  {
    this.registeForm = this.fb.group({
      firstName:['', [Validators.required,Validators.maxLength(32)]],
      lastName:['',[Validators.required,Validators.maxLength(32)]],
      email:['',[Validators.required,Validators.email,Validators.maxLength(68)]],
      phoneNumber:['',[Validators.required,Validators.email,Validators.maxLength(68)]],
      dob:['',[Validators.required]],
      password:['',[Validators.required,Validators.maxLength(32)]],
      confirmPassword:['',[Validators.required,Validators.maxLength(32)]],
      address:['023'],
      keepSignIn:[false]
    })
  }

  registerUserFormSubmit()
  {
    console.log(this.registeForm)
    this.route.params.subscribe((value)=>{
      console.log(value['userType'])
      this.httpService.register(value['userType'],this.registeForm.value).subscribe((value)=>{
        console.log(value)
      },(error)=>{
        console.log(error)
      })
    })

  }

}
