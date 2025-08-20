import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { carBrands } from '../common/config';

@Component({
  selector: 'app-brand-view-more',
  templateUrl: './brand-view-more.component.html',
  styleUrls: ['./brand-view-more.component.css']
})
export class BrandViewMoreComponent {
  public carBrands = carBrands

constructor(private route:Router) { }
searchCar(type:string)
  {
    this.route.navigate(['/search'],{queryParams:{make:type}})
  }

}
