import { Component } from '@angular/core';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-explore-our-cars',
  templateUrl: './explore-our-cars.component.html',
  styleUrls: ['./explore-our-cars.component.css']
})
export class ExploreOurCarsComponent {

  constructor(private httpService:HttpServiceService)
  {

  }

  cars = [
    { name: 'Sedan', image: 'assets/images/partner/c12.png' },
    { name: 'Campers', image: 'assets/images/partner/c10.png' },
    { name: 'Cabriolet', image: 'assets/images/partner/c8.png' },
    { name: 'Pickup', image: 'assets/images/partner/c11.png' },
    { name: 'Supercar', image: 'assets/images/partner/c7.png' },
    { name: 'Minivans', image: 'assets/images/partner/c9.png' }
  ];

  ngOnInit(): void {
    this.getExploreCars()
   }
 
   getExploreCars()
   {
     this.httpService.getCars('exploreOurcars').subscribe((value)=>{
      if(value.success)
      {
        this.cars = value.cars
      }
     },(error)=>{
        console.log('error occured in explore all car list ')
     })
   }
}
