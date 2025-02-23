import { Component } from '@angular/core';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-recently-added-cars',
  templateUrl: './recently-added-cars.component.html',
  styleUrls: ['./recently-added-cars.component.css']
})
export class RecentlyAddedCarsComponent {

  constructor(private httpService:HttpServiceService)
  {

  }

    cars = [
      {
        title: 'Chevrolet Suburban 2021 mo',
        subtitle: 'Mini Cooper 3 Similar',
        price: '$27,000',
        badge: 'New',
        images: [
          'assets/images/car-list/car7.jpg',
          'assets/images/car-list/car11.jpg',
          'assets/images/car-list/car12.jpg'
        ]
      },
      {
        title: 'Chevrolet Suburban 2021 mo',
        subtitle: 'Mini Cooper 3 Similar',
        price: '$27,000',
        badge: 'New',
        images: [
          'assets/images/car-list/car2.jpg',
          'assets/images/car-list/car11.jpg',
          'assets/images/car-list/car12.jpg'
        ]
      },
      {
        title: 'Chevrolet Suburban 2021 mo',
        subtitle: 'Mini Cooper 3 Similar',
        price: '$27,000',
        badge: 'Trending',
        images: [
          'assets/images/car-list/car6.jpg',
          'assets/images/car-list/car11.jpg',
          'assets/images/car-list/car12.jpg'
        ]
      },
      {
        title: 'Chevrolet Suburban 2021 mo',
        subtitle: 'Mini Cooper 3 Similar',
        price: '$27,000',
        badge: 'New',
        images: [
          'assets/images/car-list/car7.jpg',
          'assets/images/car-list/car11.jpg',
          'assets/images/car-list/car12.jpg'
        ]
      },
      {
        title: 'Chevrolet Suburban 2021 mo',
        subtitle: 'Mini Cooper 3 Similar',
        price: '$27,000',
        badge: 'New',
        images: [
          'assets/images/car-list/car2.jpg',
          'assets/images/car-list/car11.jpg',
          'assets/images/car-list/car12.jpg'
        ]
      },
      {
        title: 'Chevrolet Suburban 2021 mo',
        subtitle: 'Mini Cooper 3 Similar',
        price: '$27,000',
        badge: 'Trending',
        images: [
          'assets/images/car-list/car6.jpg',
          'assets/images/car-list/car11.jpg',
          'assets/images/car-list/car12.jpg'
        ]
      }
    ];

    ngOnInit(): void {
      this.getExploreCars()
     }
   
     getExploreCars()
     {
       this.httpService.getCars('recentlyAddedCars').subscribe((value)=>{
        if(value.success)
        {
          this.cars = value.cars
        }
       },(error)=>{
          console.log('error occured in explore all car list ')
       })
     }
  }
  
