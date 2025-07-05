import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpServiceService } from '../services/http-service.service';
import { ActivatedRoute, Router, } from '@angular/router';
import { SnackbarService } from '../snackBar/services/snackbar.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registeForm!:FormGroup;
  public userType=''
  showPassword: boolean = false;
  maxDate!: string;


  constructor(private fb:FormBuilder, private httpService:HttpServiceService, private route:ActivatedRoute, private router: Router, private snackbar: SnackbarService)
  {

  }

  ngOnInit()
  {

    const today = new Date();
  const year = today.getFullYear() - 18;
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  this.maxDate = `${year}-${month}-${day}`;

    this.route.params.subscribe((value)=>{
      this.userType=value['userType'];
    })
     this.registeForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName: ['', [Validators.required,Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    dob: ['', [Validators.required]],
    address: ['', [Validators.required]],
    tradeLicenseNumber: [this.userType === 'vendor' ? '' : null],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required]],
    keepSignIn: [false]
  }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
  const password = form.get('password')?.value;
  const confirm = form.get('confirmPassword')?.value;
  return password === confirm ? null : { mismatch: true };
}

  registerUserFormSubmit()
  {
    console.log(this.registeForm)
     if (this.registeForm.invalid) {
    this.registeForm.markAllAsTouched(); 
    return;
  }
    this.route.params.subscribe((value)=>{
      console.log(value['userType'])
      this.httpService.register(value['userType'],this.registeForm.value).subscribe((value)=>{
        console.log(value)
        if(value.success)
        {
          this.router.navigate(['/login'])
         this.snackbar.show('your account created successfully', 5000, 'success')

        }
      },(error)=>{
                this.snackbar.show('something went wrong', 5000, 'error')
      })
    })

  }

  togglePasswordVisibility() {
  this.showPassword = !this.showPassword;
}

}
