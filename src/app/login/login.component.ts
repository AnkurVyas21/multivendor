import { Component } from '@angular/core';
import { AuthService } from '../services/authService/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  password=''
  email=''
  selectedUserType='user'
  
  constructor(private authService: AuthService, private router:Router)
  {

  }
  onLogin(email: string, password: string) {
    console.log(this.selectedUserType == 'user')
    this.authService.login(email, password,this.selectedUserType).subscribe(
      response => console.log('Login successful', response),
      error => {
        console.log(error),
        localStorage.setItem('authorization','Basic am9obi5kb2VAZXhhbXBsZS5jb206cGFzc3dvcmQxMjM=');
        localStorage.setItem('userType',this.selectedUserType);
        
        if(this.selectedUserType == 'user')
       { window.location.href = 'home';}
      else if(this.selectedUserType == 'vendor')
      {
        window.location.href = '/admin/dashboard';
      }
      }
    );
  }
  
}
