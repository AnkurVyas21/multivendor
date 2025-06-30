import { Component } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/app/enviornment/environment';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-trending-cars',
  templateUrl: './trending-cars.component.html',
  styleUrls: ['./trending-cars.component.css']
})
export class TrendingCarsComponent {
  baseUrl = environment.apiUrl;

  constructor(private httpService:HttpServiceService)
  {
  }

//   public cars = [
// {
//   "id": 2,
//   "title": "Lexus LC Hybrid 2024",
//   "make": "Audi",
//   "model": "X5",
//   "type": "Compact",
//   "year": "2020",
//   "condition": "Used",
//   "stockNumber": "2514251",
//   "vinNumber": "52415241",
//   "regularPrice": 80000,
//   "salePrice": 27000,
//   "requestPrice": 142334.0,
//   "description": null,
//   "priceLabel": false,
//   "createTime": "2025-02-24T19:54:24.000+00:00",
//   "updateTime": "2025-02-24T19:54:52.000+00:00",
//   "media": {
//       "photo1": "assets/images/car-list/car11.jpg",
//       "photo2": "assets/images/car-list/car18.jpg",
//       "photo3": "assets/images/car-list/car12.jpg",
//       "photo4": "assets/images/car-list/car11.jpg",
//       "photo5": "assets/images/car-list/car12.jpg",
//       "videoUrl": "https://www.youtube.com/shorts/example",
//       "vinReport": null
//     }},
// {
//   "id": 2,
//   "title": "Chevrolet Suburban 2021 mo",
//   "make": "Audi",
//   "model": "X5",
//   "type": "Compact",
//   "year": "2020",
//   "condition": "Used",
//   "stockNumber": "2514251",
//   "vinNumber": "52415241",
//   "regularPrice": 33332.0,
//   "salePrice": 27000,
//   "requestPrice": 142334.0,
//   "description": null,
//   "priceLabel": false,
//   "createTime": "2025-02-24T19:54:24.000+00:00",
//   "updateTime": "2025-02-24T19:54:52.000+00:00",
//   "media": {
//       "photo1": "assets/images/car-list/car12.jpg",
//       "photo2": "assets/images/car-list/car11.jpg",
//       "photo3": "assets/images/car-list/car12.jpg",
//       "photo4": "assets/images/car-list/car11.jpg",
//       "photo5": "assets/images/car-list/car12.jpg",
//       "videoUrl": "https://www.youtube.com/shorts/example",
//       "vinReport": null
//     }},
// {
//   "id": 2,
//   "title": "Chevrolet Suburban 2021 mo",
//   "make": "Audi",
//   "model": "X5",
//   "type": "Compact",
//   "year": "2020",
//   "condition": "Used",
//   "stockNumber": "2514251",
//   "vinNumber": "52415241",
//   "regularPrice": 33332.0,
//   "salePrice": 27000,
//   "requestPrice": 142334.0,
//   "description": null,
//   "priceLabel": false,
//   "createTime": "2025-02-24T19:54:24.000+00:00",
//   "updateTime": "2025-02-24T19:54:52.000+00:00",
//   "media": {
//       "photo1": "assets/images/car-list/car18.jpg",
//       "photo2": "assets/images/car-list/car11.jpg",
//       "photo3": "assets/images/car-list/car12.jpg",
//       "photo4": "assets/images/car-list/car11.jpg",
//       "photo5": "assets/images/car-list/car12.jpg",
//       "videoUrl": "https://www.youtube.com/shorts/example",
//       "vinReport": null
//     }},
// {
//   "id": 2,
//   "title": "Chevrolet Suburban 2021 mo",
//   "make": "Audi",
//   "model": "X5",
//   "type": "Compact",
//   "year": "2020",
//   "condition": "Used",
//   "stockNumber": "2514251",
//   "vinNumber": "52415241",
//   "regularPrice": 33332.0,
//   "salePrice": 27000,
//   "requestPrice": 142334.0,
//   "description": null,
//   "priceLabel": false,
//   "createTime": "2025-02-24T19:54:24.000+00:00",
//   "updateTime": "2025-02-24T19:54:52.000+00:00",
//   "media": {
//       "photo1": "assets/images/car-list/car12.jpg",
//       "photo2": "assets/images/car-list/car11.jpg",
//       "photo3": "assets/images/car-list/car12.jpg",
//       "photo4": "assets/images/car-list/car11.jpg",
//       "photo5": "assets/images/car-list/car12.jpg",
//       "videoUrl": "https://www.youtube.com/shorts/example",
//       "vinReport": null
//     }},
// {
//   "id": 2,
//   "title": "Chevrolet Suburban 2021 mo",
//   "make": "Audi",
//   "model": "X5",
//   "type": "Compact",
//   "year": "2020",
//   "condition": "Used",
//   "stockNumber": "2514251",
//   "vinNumber": "52415241",
//   "regularPrice": 33332.0,
//   "salePrice": 27000,
//   "requestPrice": 142334.0,
//   "description": null,
//   "priceLabel": false,
//   "createTime": "2025-02-24T19:54:24.000+00:00",
//   "updateTime": "2025-02-24T19:54:52.000+00:00",
//   "media": {
//       "photo1": "assets/images/car-list/car2.jpg",
//       "photo2": "assets/images/car-list/car11.jpg",
//       "photo3": "assets/images/car-list/car12.jpg",
//       "photo4": "assets/images/car-list/car11.jpg",
//       "photo5": "assets/images/car-list/car12.jpg",
//       "videoUrl": "https://www.youtube.com/shorts/example",
//       "vinReport": null
//     }},
// {
//   "id": 2,
//   "title": "Chevrolet Suburban 2021 mo",
//   "make": "Audi",
//   "model": "X5",
//   "type": "Compact",
//   "year": "2020",
//   "condition": "Used",
//   "stockNumber": "2514251",
//   "vinNumber": "52415241",
//   "regularPrice": 33332.0,
//   "salePrice": 27000,
//   "requestPrice": 142334.0,
//   "description": null,
//   "priceLabel": false,
//   "createTime": "2025-02-24T19:54:24.000+00:00",
//   "updateTime": "2025-02-24T19:54:52.000+00:00",
//   "media": {
//       "photo1": "assets/images/car-list/car18.jpg",
//       "photo2": "assets/images/car-list/car11.jpg",
//       "photo3": "assets/images/car-list/car12.jpg",
//       "photo4": "assets/images/car-list/car11.jpg",
//       "photo5": "assets/images/car-list/car12.jpg",
//       "videoUrl": "https://www.youtube.com/shorts/example",
//       "vinReport": null
//     }},
//   ];

public cars:any = []
  ngOnInit(): void {
     this.trendingCars()
   }

   trendingCars(){
    let page =0
this.httpService.getCarsHome('trending', page).pipe(
  map((value: any) => {
    if (value.success) {
      value.data = value.data.slice(0, 6); // limit to 6 items
    }
    return value;
  })
).subscribe((value) => {
  if (value.success) {
    this.cars=value.data;
    console.log(this.cars, 'value');

  }
},(error)=>{
        console.log('error occured in explore all car list ')
     })
   }

  convertArray(media: any)
  {
    const photos = Object.keys(media)
    .filter(key => key.startsWith("photo")) // Filter only keys that start with "photo"
    .map(key => media[key]); // Get the corresponding values

    return photos
  }

  hoveredIndexes: { [carId: number]: number | null } = {};

setHoveredImage(carId: number, index: number) {
  this.hoveredIndexes[carId] = index;
}

resetHoveredImage(carId: number) {
  this.hoveredIndexes[carId] = null;
}

}
