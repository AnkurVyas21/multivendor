import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css','../../../assets/css/modern.css'],
})
export class VendorComponent {
  searchQuery: string = '';
  user:any
  adminName: string = 'Ankur Vyas'; // Example admin name
  profilePictureUrl: string | null = null; // Set to null if no picture available

  constructor(private router: Router,private httpService:HttpServiceService) {}

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
  this.getProfileDetails()
}

getProfileDetails()
{
this.httpService.getSelfProfile().subscribe((value:any)=>{
  this.user=value.data;
})

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

  viewProfile() {
    console.log("View Profile clicked");
    // Navigate to the profile page
  }
  
  resetPassword() {
 this.router.navigate(['/reset-password'])
  }
  
  logout() {
    console.log("Logout clicked");
    localStorage.clear()
    this.router.navigate(['/login'])
    // Implement logout logic
  }
}
