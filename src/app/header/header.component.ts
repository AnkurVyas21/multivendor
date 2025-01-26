import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}
  isDropdownOpen = false; // Flag to control dropdown visibility
  isLogin=false;
  userType:any
  
@Input() isAdmin:any;

ngOnInit()
{
  this.isLogin = localStorage.getItem('authorization') ? true : false;
  this.userType = localStorage.getItem('userType')
}

navigateToProfile(): void {
  this.router.navigate(['/profile']);
}


logout() {
  // Implement logout logic here
   window.location.href = '/login'
  localStorage.clear()

}

toggleDropdown(): void {
  console.log('toolge working')
  this.isDropdownOpen = !this.isDropdownOpen;
}

}
