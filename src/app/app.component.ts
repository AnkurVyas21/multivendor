import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from './services/loaderService/loader.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'multivendor';
  currentPath: string = '';
 loader$: Observable<boolean>;
  constructor(private router: Router,private loaderService: LoaderService) {
     this.loader$ = this.loaderService.loaderState$;
  }

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      const fullUrl = this.router.url; 
      const segments = fullUrl.split('/'); 
      this.currentPath = segments[1] || ''; 
    });
  }
}
