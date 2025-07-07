import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { environment } from 'src/app/enviornment/environment';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-explore-all-cars',
  templateUrl: './explore-all-cars.component.html',
  styleUrls: ['./explore-all-cars.component.css']
})
export class ExploreAllCarsComponent {
 baseUrl = environment.apiUrl
  wishlistedCars :any

 
  constructor(private httpService:HttpServiceService,private cd: ChangeDetectorRef)
  {

  }
      cars:any=[]

    ngOnInit(): void {
    this.getWishlist()
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
  
