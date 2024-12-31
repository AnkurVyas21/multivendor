import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'multivendor';
  currentPath: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      const fullUrl = this.router.url; // e.g., '/admin'
      const segments = fullUrl.split('/'); // Split by '/'
      this.currentPath = segments[1] || ''; // Extract 'admin'
      console.log('Current Path:', this.currentPath); // Output: 'admin'
    });
  }
}
