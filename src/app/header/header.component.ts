import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) {}
  isDropdownOpen = false; // Flag to control dropdown visibility

  
@Input() isAdmin:any;

navigateToProfile(): void {
  this.router.navigate(['/profile']);
}


logout() {
  // Implement logout logic here
  this.router.navigate(['/login']);
  localStorage.clear()

}

toggleDropdown(): void {
  console.log('toolge working')
  this.isDropdownOpen = !this.isDropdownOpen;
}

}
