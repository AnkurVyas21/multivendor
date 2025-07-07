import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-by-brand',
  templateUrl: './shop-by-brand.component.html',
  styleUrls: ['./shop-by-brand.component.css']
})
export class ShopByBrandComponent {

  brands = [
    { name: 'Mercedes', image: './assets/images/banner/1.jpg' },
    { name: 'BMW', image: './assets/images/banner/2.jpg' },
    { name: 'Audi', image: './assets/images/banner/3.jpg' },
    { name: 'Tesla', image: './assets/images/banner/4.jpg' },
    { name: 'Honda', image: './assets/images/banner/5.jpg' }
  ];

  constructor(private route:Router) { } 

  searchCar(type:string)
  {
    console.log('clicked',type)
    this.route.navigate(['/search'],{queryParams:{make:type}})

  }
  
}
