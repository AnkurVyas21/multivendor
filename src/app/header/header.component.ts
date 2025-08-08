import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private activateRoute:ActivatedRoute) {}
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

navigateToResetPassword()
{
  this.router.navigate(['/reset-password'])
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

navigateOnVisitPage()
{
  let userType = localStorage.getItem('userType');
  let isLogin = !!localStorage.getItem('authorization')
  if(isLogin){
  if(userType=='vendor')
  {
    return {showText:'Visit Vendor Site', path:'/vendor'}
  }
  else(userType=='admin' || userType=='superAdmin')
  {
    return {showText:'Visit Admin Site', path:'/admin'}
  }}
  else {
   if (this.router.url.includes('/admin')) {
    return {showText:'Visit Vendor Site', path:'/vendor'}
  } 
  else {
    return {showText:'Sell With Us', path:'register/vendor'}
  }
  }
}

}
