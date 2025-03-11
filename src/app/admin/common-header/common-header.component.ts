import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-common-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.css','../../../assets/css/modern.css']
})
export class CommonHeaderComponent {

  constructor(private router: Router) {}
  logout() {
    console.log("Logout clicked");
    localStorage.clear()
    this.router.navigate(['/login'])
  }
}
