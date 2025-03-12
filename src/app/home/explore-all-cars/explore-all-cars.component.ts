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

 cars = [
  {
    "id": 2,
    "title": "Lexus LC Hybrid 2024",
    "make": "Audi",
    "model": "X5",
    "type": "Compact",
    "year": "2020",
    "condition": "Used",
    "stockNumber": "2514251",
    "vinNumber": "52415241",
    "regularPrice": 80000,
    "salePrice": 27000,
    "requestPrice": 142334.0,
    "description": null,
    "priceLabel": false,
    "createTime": "2025-02-24T19:54:24.000+00:00",
    "updateTime": "2025-02-24T19:54:52.000+00:00",
    "media": {
        "photo1": "assets/images/car-list/car11.jpg",
        "photo2": "assets/images/car-list/car18.jpg",
        "photo3": "assets/images/car-list/car12.jpg",
        "photo4": "assets/images/car-list/car11.jpg",
        "photo5": "assets/images/car-list/car12.jpg",
        "videoUrl": "https://www.youtube.com/shorts/example",
        "vinReport": null
      }},
  {
    "id": 2,
    "title": "Chevrolet Suburban 2021 mo",
    "make": "Audi",
    "model": "X5",
    "type": "Compact",
    "year": "2020",
    "condition": "Used",
    "stockNumber": "2514251",
    "vinNumber": "52415241",
    "regularPrice": 33332.0,
    "salePrice": 27000,
    "requestPrice": 142334.0,
    "description": null,
    "priceLabel": false,
    "createTime": "2025-02-24T19:54:24.000+00:00",
    "updateTime": "2025-02-24T19:54:52.000+00:00",
    "media": {
        "photo1": "assets/images/car-list/car12.jpg",
        "photo2": "assets/images/car-list/car11.jpg",
        "photo3": "assets/images/car-list/car12.jpg",
        "photo4": "assets/images/car-list/car11.jpg",
        "photo5": "assets/images/car-list/car12.jpg",
        "videoUrl": "https://www.youtube.com/shorts/example",
        "vinReport": null
      }},
  {
    "id": 2,
    "title": "Chevrolet Suburban 2021 mo",
    "make": "Audi",
    "model": "X5",
    "type": "Compact",
    "year": "2020",
    "condition": "Used",
    "stockNumber": "2514251",
    "vinNumber": "52415241",
    "regularPrice": 33332.0,
    "salePrice": 27000,
    "requestPrice": 142334.0,
    "description": null,
    "priceLabel": false,
    "createTime": "2025-02-24T19:54:24.000+00:00",
    "updateTime": "2025-02-24T19:54:52.000+00:00",
    "media": {
        "photo1": "assets/images/car-list/car18.jpg",
        "photo2": "assets/images/car-list/car11.jpg",
        "photo3": "assets/images/car-list/car12.jpg",
        "photo4": "assets/images/car-list/car11.jpg",
        "photo5": "assets/images/car-list/car12.jpg",
        "videoUrl": "https://www.youtube.com/shorts/example",
        "vinReport": null
      }},
  {
    "id": 2,
    "title": "Chevrolet Suburban 2021 mo",
    "make": "Audi",
    "model": "X5",
    "type": "Compact",
    "year": "2020",
    "condition": "Used",
    "stockNumber": "2514251",
    "vinNumber": "52415241",
    "regularPrice": 33332.0,
    "salePrice": 27000,
    "requestPrice": 142334.0,
    "description": null,
    "priceLabel": false,
    "createTime": "2025-02-24T19:54:24.000+00:00",
    "updateTime": "2025-02-24T19:54:52.000+00:00",
    "media": {
        "photo1": "assets/images/car-list/car12.jpg",
        "photo2": "assets/images/car-list/car11.jpg",
        "photo3": "assets/images/car-list/car12.jpg",
        "photo4": "assets/images/car-list/car11.jpg",
        "photo5": "assets/images/car-list/car12.jpg",
        "videoUrl": "https://www.youtube.com/shorts/example",
        "vinReport": null
      }},
  {
    "id": 2,
    "title": "Chevrolet Suburban 2021 mo",
    "make": "Audi",
    "model": "X5",
    "type": "Compact",
    "year": "2020",
    "condition": "Used",
    "stockNumber": "2514251",
    "vinNumber": "52415241",
    "regularPrice": 33332.0,
    "salePrice": 27000,
    "requestPrice": 142334.0,
    "description": null,
    "priceLabel": false,
    "createTime": "2025-02-24T19:54:24.000+00:00",
    "updateTime": "2025-02-24T19:54:52.000+00:00",
    "media": {
        "photo1": "assets/images/car-list/car2.jpg",
        "photo2": "assets/images/car-list/car11.jpg",
        "photo3": "assets/images/car-list/car12.jpg",
        "photo4": "assets/images/car-list/car11.jpg",
        "photo5": "assets/images/car-list/car12.jpg",
        "videoUrl": "https://www.youtube.com/shorts/example",
        "vinReport": null
      }},
  {
    "id": 2,
    "title": "Chevrolet Suburban 2021 mo",
    "make": "Audi",
    "model": "X5",
    "type": "Compact",
    "year": "2020",
    "condition": "Used",
    "stockNumber": "2514251",
    "vinNumber": "52415241",
    "regularPrice": 33332.0,
    "salePrice": 27000,
    "requestPrice": 142334.0,
    "description": null,
    "priceLabel": false,
    "createTime": "2025-02-24T19:54:24.000+00:00",
    "updateTime": "2025-02-24T19:54:52.000+00:00",
    "media": {
        "photo1": "assets/images/car-list/car18.jpg",
        "photo2": "assets/images/car-list/car11.jpg",
        "photo3": "assets/images/car-list/car12.jpg",
        "photo4": "assets/images/car-list/car11.jpg",
        "photo5": "assets/images/car-list/car12.jpg",
        "videoUrl": "https://www.youtube.com/shorts/example",
        "vinReport": null
      }},
    ];


  ngOnInit(): void {
    this.getExploreCars()
   }
 
   getExploreCars()
   {
     this.httpService.getCars('exploreAllCars').subscribe((value)=>{
      if(value.success)
      {
        this.cars = value.cars
      }
     },(error)=>{
        console.log('error occured in explore all car list ')
     })
   }
}
