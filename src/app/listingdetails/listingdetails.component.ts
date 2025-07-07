import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpServiceService } from '../services/http-service.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../enviornment/environment';

@Component({
  selector: 'app-listingdetails',
  templateUrl: './listingdetails.component.html',
  styleUrls: ['./listingdetails.component.css']
})
export class ListingdetailsComponent {

  contactUs!:FormGroup
  public basics:any
  public features:any
  public specification:any
  public media:any
  public frontImage:any;
  public selectedPhotoIndex=1;
   baseUrl = environment.apiUrl
   public wishlisted = false;
  
cars:any=[]
  constructor(public dialog: MatDialog, private fb:FormBuilder, private httpService:HttpServiceService,private route:ActivatedRoute)
  {

  }

  ngOnInit()
  {
    this.contactUs = this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required, Validators.email],
      phone:['',Validators.required],
      message:['',Validators.required]
    })

    this.route.params.subscribe((value)=>{
    this.getCarDetails(value['id'])
    this.getSimilarCar(value['id'])

    })
    this.getWishlist()
  }

  getCarDetails(id:number)
  {

    this.httpService.getCarsDetailsBasics(id).subscribe((value)=>{
 
      this.basics= value.data
    },(error)=>{
      console.log(error)
    })


    this.httpService.getCarsDetailsFeature(id).subscribe((value)=>{
      this.features = value.data
    },(error)=>{
      console.log(error)
    })

    this.httpService.getCarsDetailsSpecification(id).subscribe((value)=>{
      this.specification = value.data
    },(error)=>{
      console.log(error)
    })

    this.httpService.getCarsDetailsMedia(id).subscribe((value)=>{
      this.media = value.data
      this.frontImage=this.media.photo1;
    },(error)=>{
      console.log(error)
    })

    this.httpService.getCarsDetailsAddress(id).subscribe((value)=>{
    },(error)=>{
      console.log(error)
    })

    this.httpService.getCarsDetailsPhoto(id).subscribe((value)=>{
    },(error)=>{
      console.log(error)
    })

  }

  opendialogBox(type:string)
  {
    const dialogRef = this.dialog.open(DialogBoxComponent,{
      data:{dialogType:type,id:this.basics.id,model:this.basics.model},
      width: '500px',
      height: '800px',
      disableClose: false,
      hasBackdrop: true,
      autoFocus: true,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  submitContactUs()
  {
    console.log(this.contactUs)
  }

  prev()
  {
     if(this.selectedPhotoIndex>0)
     {
      this.selectedPhotoIndex--;
      this.frontImage=this.media['photo'+this.selectedPhotoIndex];
     }
  }

  next()
  {
     if(this.selectedPhotoIndex<Object.keys(this.media)?.slice(1,6).length)
     {
      this.selectedPhotoIndex++;
      this.frontImage=this.media['photo'+this.selectedPhotoIndex];
     }
     else {
       this.selectedPhotoIndex=1;
       this.frontImage=this.media['photo'+this.selectedPhotoIndex];
     }
  }

  selectPhoto(index:number,photo:any)
  {
   this.selectedPhotoIndex=index+1;
   this.frontImage=photo
  }

    getSimilarCar(id:any)
    {
    this.httpService.getCarsSimilar(id).subscribe((value) => {
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

     addToFav(id:any)
     {
      let email = localStorage.getItem('email')
      this.httpService.wishlistPost(id,email).subscribe((value)=>{
        this.getWishlist()
      },(error)=>{
        this.getWishlist()
      })
     }

     getWishlist()
     {
      let email = localStorage.getItem('email')
      this.httpService.getWishlist(email).subscribe((value)=>{
       this.wishlisted = value.carIds.includes(+this.route.snapshot.params['id'])
        return 0
      })
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
