import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
      const fullUrl = this.router.url; 
      const segments = fullUrl.split('/'); 
      this.currentPath = segments[1] || ''; 
      console.log('Current Path:', this.currentPath); 
    });
  }
}
