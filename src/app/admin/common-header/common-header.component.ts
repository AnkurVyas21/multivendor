import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-common-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.css','../../../assets/css/modern.css']
})
export class CommonHeaderComponent {
  public userType = 'admin'
  constructor(private router: Router) {}
  logout() {
    this.userType = localStorage.getItem('userType')||'admin'
    localStorage.clear()
    this.router.navigate(['/login'])
  }
}
