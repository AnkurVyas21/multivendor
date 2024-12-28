import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

public loader = true;

ngOnInit(): void {
  setTimeout(() => {
    this.loader = false;
  }, 2000);
}

}
