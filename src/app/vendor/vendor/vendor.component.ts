import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent {
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
  console.log('vendor compoennt runs')
  this.isLogin = !!localStorage.getItem('adminUserType')&& !!localStorage.getItem('authorization')
  this.userType = localStorage.getItem('userType')
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
    this.router.navigate([`/vendor/${route}`]);
  }

  toggleToolBar()
  {
   this.isVisible = !this.isVisible
  }
}
