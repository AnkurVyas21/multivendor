import { ChangeDetectorRef, Component } from '@angular/core';
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
  wishlistedCars :any
  public dummyImage = ['src\assets\images\logo\search.png']

  constructor(private httpService:HttpServiceService,private cd: ChangeDetectorRef)
  {
  }


public cars:any = []
  ngOnInit(): void {
    this.getWishlist()
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

wishlist(carId: number){
  let email = localStorage.getItem('email')
      this.httpService.wishlistPost(carId,email).subscribe((value)=>{
        this.getWishlist()
      },(error)=>{
        this.getWishlist()
      })
}

getWishlist()
     {
      let email = localStorage.getItem('email')
      this.httpService.getWishlist(email).subscribe((value)=>{
       this.wishlistedCars=value.carIds;
         this.cd.detectChanges();
      })
     }

     checkWishlist(id:any)
     {
      return this.wishlistedCars.includes(id)
     }

     removeWishlist(carId: number)
     {
       let email = localStorage.getItem('email')
      this.httpService.deleteWishlist(carId).subscribe((value)=>{
        this.getWishlist()
      },(error)=>{
        this.getWishlist()
      })
     }

}
