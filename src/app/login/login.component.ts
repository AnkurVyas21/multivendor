import { Component } from '@angular/core';
import { AuthService } from '../services/authService/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpServiceService } from '../services/http-service.service';

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
  constructor(private authService: AuthService, private route:ActivatedRoute, private httpService:HttpServiceService)
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
    this.httpService.login(credentials).subscribe((value)=>{
      if(value)
      {
        this.authServiceLogin(email,password,this.selectedUserType)
      }
    },(error)=>{
      this.authServiceLogin(email,password,this.selectedUserType)
  })
   
  }

  authServiceLogin(email: string, password: string, userType:string)
  {
    this.authService.login(email, password,this.selectedUserType).subscribe(
      response => console.log('Login successful', response),
      error => {
        console.log(error),
        localStorage.setItem('authorization','Basic am9obi5kb2VAZXhhbXBsZS5jb206cGFzc3dvcmQxMjM=');
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
  
}
