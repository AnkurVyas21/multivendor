import { Component } from '@angular/core';
import { environment } from 'src/app/enviornment/environment';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-recently-added-cars',
  templateUrl: './recently-added-cars.component.html',
  styleUrls: ['./recently-added-cars.component.css']
})
export class RecentlyAddedCarsComponent {
 baseUrl = environment.apiUrl

  constructor(private httpService:HttpServiceService)
  {

  }

 
      cars:any=[]

    ngOnInit(): void {
      this.getRecentCars()
     }
   
     getRecentCars()
    {
    this.httpService.getCarsHome('recently').subscribe((value) => {
  if (value.success) {
    this.cars= value.data;

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
  
