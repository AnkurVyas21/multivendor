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
  
  constructor(private authService: AuthService, private router:Router)
  {

  }
  onLogin(email: string, password: string) {
    this.authService.login(email, password,'USER').subscribe(
      response => console.log('Login successful', response),
      error => {
        console.log(error),
        localStorage.setItem('authorization','Basic am9obi5kb2VAZXhhbXBsZS5jb206cGFzc3dvcmQxMjM=');
        window.location.href = '/home';
      }
    );
  }
  
}
