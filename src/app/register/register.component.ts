import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpServiceService } from '../services/http-service.service';
import { ActivatedRoute, Router, } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registeForm!:FormGroup;
  public userType=''

  constructor(private fb:FormBuilder, private httpService:HttpServiceService, private route:ActivatedRoute, private router: Router)
  {

  }

  ngOnInit()
  {
    this.route.params.subscribe((value)=>{
      this.userType=value['userType'];
    })
    this.registeForm = this.fb.group({
      firstName:['', [Validators.required,Validators.maxLength(32)]],
      lastName:['',[Validators.required,Validators.maxLength(32)]],
      email:['',[Validators.required,Validators.email,Validators.maxLength(68)]],
      phoneNumber:['',[Validators.required,Validators.email,Validators.maxLength(68)]],
      dob:['',[Validators.required]],
      address:['',Validators.required],
      tradeLicenseNumber:[''],
      password:['',[Validators.required,Validators.maxLength(32)]],
      confirmPassword:['',[Validators.required,Validators.maxLength(32)]],
    })
  }

  registerUserFormSubmit()
  {
    console.log(this.registeForm)
    this.route.params.subscribe((value)=>{
      console.log(value['userType'])
      this.httpService.register(value['userType'],this.registeForm.value).subscribe((value)=>{
        console.log(value)
        if(value.success)
        {
          this.router.navigate(['/login'])
        }
      },(error)=>{
        console.log(error)
      })
    })

  }

}
