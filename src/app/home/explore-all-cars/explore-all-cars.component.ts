import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-explore-all-cars',
  templateUrl: './explore-all-cars.component.html',
  styleUrls: ['./explore-all-cars.component.css']
})
export class ExploreAllCarsComponent {


 constructor(private httpService:HttpServiceService)
 {

 }

 public carList = [
    {
      id: 1,
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
      id: 2,
      title: 'Lexus LC Hybrid 2024',
      subtitle: 'Luxury Hybrid Car',
      price: '$35,000',
      badge: 'Trending',
      images: [
        'assets/images/car-list/car2.jpg',
        'assets/images/car-list/car11.jpg',
        'assets/images/car-list/car12.jpg'
      ]
    },
    {
      id: 3,
      title: 'BMW X5 2023',
      subtitle: 'SUV 4WD',
      price: '$40,500',
      badge: 'Popular',
      images: [
        'assets/images/car-list/car6.jpg',
        'assets/images/car-list/car11.jpg',
        'assets/images/car-list/car12.jpg'
      ]
    },
    {
      id: 3,
      title: 'BMW X5 2023',
      subtitle: 'SUV 4WD',
      price: '$40,500',
      badge: 'Popular',
      images: [
        'assets/images/car-list/car6.jpg',
        'assets/images/car-list/car11.jpg',
        'assets/images/car-list/car12.jpg'
      ]
    },
    {
      id: 3,
      title: 'BMW X5 2023',
      subtitle: 'SUV 4WD',
      price: '$40,500',
      badge: 'Popular',
      images: [
        'assets/images/car-list/car6.jpg',
        'assets/images/car-list/car11.jpg',
        'assets/images/car-list/car12.jpg'
      ]
    },
    {
      id: 3,
      title: 'BMW X5 2023',
      subtitle: 'SUV 4WD',
      price: '$40,500',
      badge: 'Popular',
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
     this.httpService.getCars('exploreAllCars').subscribe((value)=>{
      if(value.success)
      {
        this.carList = value.cars
      }
     },(error)=>{
        console.log('error occured in explore all car list ')
     })
   }
}
