import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  searchQuery: string = '';
  adminName: string = 'Ankur Vyas'; // Example admin name
  profilePictureUrl: string | null = null; // Set to null if no picture available

  constructor(private router: Router) {}

  isVisible = true;
  arrowButtonVisible = false;
  isLogin = false;
  userType:string|null=''

  /**
   * Get the initials from the admin's name.
   * @param name - Full name of the admin.
   * @returns Initials of the first and last name.
   */

ngOnInit() {
  this.isLogin = !!localStorage.getItem('adminUserType')&& !!localStorage.getItem('authorization')
  this.userType = localStorage.getItem('userType')
}


checkScreenSize() {
  console.log(window.innerWidth, 'inner widhth')
  this.isVisible = (window.innerWidth < 768); // Adjust breakpoint as needed
}
  getInitials(name: string): string {
    const [firstName, lastName] = name.split(' ');
    const firstInitial = firstName ? firstName[0].toUpperCase() : '';
    const lastInitial = lastName ? lastName[0].toUpperCase() : '';
    return `${firstInitial}${lastInitial}`;
  }

  onSearch(): void {
    console.log('Search Query:', this.searchQuery);
    // Implement filtering logic here if needed
  }

  navigateTo(route: string): void {
    this.router.navigate([`/admin/${route}`]);
  }

  toggleToolBar()
  {
   this.isVisible = !this.isVisible
  }
  
  viewProfile() {
    console.log("View Profile clicked");
    // Navigate to the profile page
  }
  
  resetPassword() {
    console.log("Reset Password clicked");
    // Implement reset password logic
  }
  
  logout() {
    console.log("Logout clicked");
    localStorage.clear()
    this.router.navigate(['/login'])

    // Implement logout logic
  }
}
