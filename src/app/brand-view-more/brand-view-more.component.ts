import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brand-view-more',
  templateUrl: './brand-view-more.component.html',
  styleUrls: ['./brand-view-more.component.css']
})
export class BrandViewMoreComponent {
  public carBrands = [
  {
    name: "Ford",
    logoUrl: "https://images.seeklogo.com/logo-png/5/2/ford-logo-png_seeklogo-56581.png"
  },
  {
    name: "Chevrolet",
    logoUrl: "https://images.seeklogo.com/logo-png/24/1/chevrolet-logo-png_seeklogo-249935.png"
  },
  {
    name: "Toyota",
    logoUrl: "https://www.citypng.com/public/uploads/preview/hd-toyota-logo-emblem-transparent-png-7017516947726323ivxwwcgjw.png" 
  },
  {
    name: "Honda",
    logoUrl: "https://www.carlogos.org/logo/Honda-logo.png"
  },
  {
    name: "Nissan",
    logoUrl: "https://www.carlogos.org/logo/Nissan-logo.png"
  },
  {
    name: "Hyundai",
    logoUrl: "https://www.carlogos.org/logo/Hyundai-logo.png"
  },
  {
    name: "Kia",
    logoUrl: "https://www.carlogos.org/logo/Kia-logo.png"
  },
  {
    name: "BMW",
    logoUrl: "https://www.carlogos.org/logo/BMW-logo.png"
  },
  {
    name: "Mercedes-Benz",
    logoUrl: "https://www.carlogos.org/logo/Mercedes-Benz-logo.png"
  },
  {
    name: "Audi",
    logoUrl: "https://www.carlogos.org/logo/Audi-logo.png"
  },
  {
    name: "Tesla",
    logoUrl: "https://www.carlogos.org/logo/Tesla-logo.png"
  },
  {
    name: "Subaru",
    logoUrl: "https://www.carlogos.org/logo/Subaru-logo.png"
  },
  {
    name: "Mazda",
    logoUrl: "https://www.carlogos.org/logo/Mazda-logo.png"
  },
  {
    name: "Lexus",
    logoUrl: "https://www.carlogos.org/logo/Lexus-logo.png"
  },
  {
    name: "Volkswagen",
    logoUrl: "https://www.carlogos.org/logo/Volkswagen-logo.png"
  },
];

constructor(private route:Router) { }
searchCar(type:string)
  {
    this.route.navigate(['/search'],{queryParams:{make:type}})
  }

}
