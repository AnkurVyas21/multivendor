import { Component } from '@angular/core';
import { HttpServiceService } from '../services/http-service.service';
import { Router } from '@angular/router';
import { from, forkJoin, Observable } from 'rxjs';
import { mergeMap, map, toArray } from 'rxjs/operators';
import { environment } from 'src/app/enviornment/environment';



@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent {

  cars:any=[]
  mergedCarData:any = []
  constructor(private httpService:HttpServiceService, private route:Router) {}
  hoveredIndexes: { [carId: number]: number | null } = {};
  baseUrl = environment.apiUrl;

  

   ngOnInit() {
     this.getWishlist()
   }
   getWishlist()
     {
      let email = localStorage.getItem('email')
      this.httpService.getWishlist(email).subscribe((value)=>{
       this.cars = value.carIds;
       console.log(this.cars)
       this.mergeData(this.cars)
        return 0
      })
     }

     mergeData(ids:number[])
     {
      from(ids).pipe(
  mergeMap(id => 
    forkJoin({
      api1: this.httpService.getCarsDetailsBasics(id),
      api2: this.httpService.getCarsDetailsMedia(id)
    }).pipe(
      map(({ api1, api2 }) => ({
        id,
         ...api1, 
         photoUrls :[...this.trimPhotos(api2)]
      }))
    )
  ),
  toArray() // to collect all merged results into one final array
).subscribe(resultArray => {
  this.mergedCarData = resultArray;
  console.log('All merged data:', resultArray);
});
      
     }

     trimPhotos(photos:any)
     {
       let photoUrl =[]
        photoUrl.push(photos.data.photo1)
        photoUrl.push(photos.data.photo2) 
        photoUrl.push(photos.data.photo3)
        photoUrl.push(photos.data.photo4)
        photoUrl.push(photos.data.photo5)
        return photoUrl
     }
     noImage()
     {
          return []
     }

     setHoveredImage(carId: number, index: number) {
  this.hoveredIndexes[carId] = index;
}

resetHoveredImage(carId: number) {
  this.hoveredIndexes[carId] = null;
}
}
