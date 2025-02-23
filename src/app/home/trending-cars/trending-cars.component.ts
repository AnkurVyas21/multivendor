import { Component } from '@angular/core';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-trending-cars',
  templateUrl: './trending-cars.component.html',
  styleUrls: ['./trending-cars.component.css']
})
export class TrendingCarsComponent {

  constructor(private httpService:HttpServiceService)
  {

  }

  cars = [
    {
      title: 'Chevrolet Suburban 2021 mo',
      subTitle: 'Mini Cooper 3 Similar',
      price: '$27,000',
      images: [
        'assets/images/car-list/car12.jpg',
        'assets/images/car-list/car11.jpg',
        'assets/images/car-list/car12.jpg'
      ],
      additionalPhotos: 2
    },
    {
      title: 'Lexus LC Hybrid 2024',
      subTitle: 'Luxury Coupe',
      price: '$80,000',
      images: [
        'assets/images/car-list/car2.jpg',
        'assets/images/car-list/car11.jpg',
        'assets/images/car-list/car12.jpg'
      ],
      additionalPhotos: 2
    },
    {
      title: 'Toyota Camry 2023',
      subTitle: 'Reliable Sedan',
      price: '$35,000',
      images: [
        'assets/images/car-list/car18.jpg',
        'assets/images/car-list/car11.jpg',
        'assets/images/car-list/car12.jpg'
      ],
      additionalPhotos: 2
    },
    {
      title: 'Chevrolet Suburban 2021 mo',
      subTitle: 'Mini Cooper 3 Similar',
      price: '$27,000',
      images: [
        'assets/images/car-list/car12.jpg',
        'assets/images/car-list/car11.jpg',
        'assets/images/car-list/car12.jpg'
      ],
      additionalPhotos: 2
    },
    {
      title: 'Lexus LC Hybrid 2024',
      subTitle: 'Luxury Coupe',
      price: '$80,000',
      images: [
        'assets/images/car-list/car2.jpg',
        'assets/images/car-list/car11.jpg',
        'assets/images/car-list/car12.jpg'
      ],
      additionalPhotos: 2
    },
    {
      title: 'Toyota Camry 2023',
      subTitle: 'Reliable Sedan',
      price: '$35,000',
      images: [
        'assets/images/car-list/car18.jpg',
        'assets/images/car-list/car11.jpg',
        'assets/images/car-list/car12.jpg'
      ],
      additionalPhotos: 2
    }
  ];

  ngOnInit(): void {
    this.getExploreCars()
   }
 
   getExploreCars()
   {
     this.httpService.getCars('trendingcars').subscribe((value)=>{
      if(value.success)
      {
        this.cars = value.cars
      }
     },(error)=>{
        console.log('error occured in explore all car list ')
     })
   }



}
