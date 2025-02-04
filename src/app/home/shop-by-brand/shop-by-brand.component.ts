import { Component } from '@angular/core';

@Component({
  selector: 'app-shop-by-brand',
  templateUrl: './shop-by-brand.component.html',
  styleUrls: ['./shop-by-brand.component.css']
})
export class ShopByBrandComponent {

  brands = [
    { name: 'Sedan', image: './assets/images/banner/1.jpg' },
    { name: 'SUV', image: './assets/images/banner/2.jpg' },
    { name: 'Hatchback', image: './assets/images/banner/3.jpg' },
    { name: 'Hybrid', image: './assets/images/banner/4.jpg' },
    { name: 'Coupe', image: './assets/images/banner/5.jpg' }
  ];
}
