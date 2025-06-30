import { Component } from '@angular/core';
import { HttpServiceService } from '../services/http-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent {

  cars:any=[]
  constructor(private httpService:HttpServiceService, private route:Router) {}
  

   ngOnInit() {
     this.getWishlist()
   }
   getWishlist()
     {
      let email = localStorage.getItem('email')
      this.httpService.getWishlist(email).subscribe((value)=>{
       this.cars = value;
       console.log(this.cars)
        return 0
      })
     }
}
