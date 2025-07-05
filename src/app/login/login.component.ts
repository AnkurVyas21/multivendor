import { Component } from '@angular/core';
import { AuthService } from '../services/authService/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpServiceService } from '../services/http-service.service';
import { SnackbarService } from '../snackBar/services/snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  password=''
  email=''
  selectedUserType:'user'|'vendor'|'admin'|'superAdmin'='user'
  lastSegment=''
  showPassword: boolean = false;

  constructor(private authService: AuthService, private route:ActivatedRoute, private httpService:HttpServiceService, private snackbar: SnackbarService)
  {

  }

  ngOnInit()
  {
    this.route.url.subscribe(urlSegments => {
      this.lastSegment = urlSegments[urlSegments.length - 1]?.path || '';
      if(this.lastSegment=='admin')
      {
        this.selectedUserType='superAdmin'
      }
      else 
      {
        this.selectedUserType = 'user'
      }
    });
  }

  onLogin(email: string, password: string) {
    let credentials = {email:email,password:password,userType:this.selectedUserType}
    this.httpService.login(credentials).subscribe((response)=>{
      if(response)
      {
         this.snackbar.show('Logged In successfull !', 5000, 'success')
        console.log(response,'response')
        localStorage.setItem('userType',response.roles[0].toLowerCase());
        localStorage.setItem('email',email);
        response.vendorId ? localStorage.setItem('vendorId',response.vendorId) : ''
        localStorage.setItem('authorization',`Basic ${btoa(`${credentials.email}:${credentials.password}`)}`);

          if(response.roles[0].toLowerCase() == 'user')
       { window.location.href = 'home';}
        else  if(response.roles[0].toLowerCase() == 'vendor')
          { window.location.href = '/vendor/dashboard';} 
      else 
      {
        window.location.href = '/admin/dashboard';
      }
      }
    },(error)=>{
      this.snackbar.show('Please check login credentials', 5000, 'error')
  })
   
  }

  authServiceLogin(email: string, password: string, userType:string)
  {
    this.authService.login(email, password,this.selectedUserType).subscribe(
      response => console.log('Login successful', response),
      error => {
        console.log(error),
        localStorage.setItem('userType',this.selectedUserType);
        if(this.selectedUserType == 'user')
       { window.location.href = 'home';}
        else  if(this.selectedUserType == 'vendor')
          { window.location.href = '/vendor/dashboard';} 
      else 
      {
        window.location.href = '/admin/dashboard';
      }
      }
    );
  }

  userType()
  {
        let registerUser = this.selectedUserType =='user' ? 'public' :this.selectedUserType
        return '/register/'+registerUser
  }
  
    togglePasswordVisibility() {
  this.showPassword = !this.showPassword;
}


}
