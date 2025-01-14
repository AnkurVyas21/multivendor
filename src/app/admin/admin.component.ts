import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  searchQuery: string = '';
  adminName: string = 'Ankur Vyas'; // Example admin name
  profilePictureUrl: string | null = null; // Set to null if no picture available

  constructor(private router: Router) {}


  /**
   * Get the initials from the admin's name.
   * @param name - Full name of the admin.
   * @returns Initials of the first and last name.
   */
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
}
