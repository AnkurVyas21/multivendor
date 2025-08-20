import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { carCategories } from '../common/config'


@Component({
  selector: 'app-categories-view-more',
  templateUrl: './categories-view-more.component.html',
  styleUrls: ['./categories-view-more.component.css']
})
export class CategoriesViewMoreComponent {
public   carCategories = carCategories

constructor(private route:Router) { }
searchCar(type:string)
  {
    this.route.navigate(['/search'],{queryParams:{type:type}})
  }
}
