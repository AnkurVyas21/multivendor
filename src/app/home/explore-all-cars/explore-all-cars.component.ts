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
      cars:any=[]

    ngOnInit(): void {
      this.getRecentCars()
     }
   
     getRecentCars()
    {
    this.httpService.getCarsHome('all').subscribe((value) => {
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
  }
  
