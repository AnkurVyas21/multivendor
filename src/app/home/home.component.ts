import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { map, Observable, startWith } from 'rxjs';
import { register } from 'swiper/element/bundle';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import * as $ from 'jquery';

// register Swiper custom elements
register();

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  public loader = true;

  constructor()
  {

  }
  ngOnInit() {
 
    
    setTimeout(() => {
      this.loader = false;
    }, 2000);
  }
  

 





}
