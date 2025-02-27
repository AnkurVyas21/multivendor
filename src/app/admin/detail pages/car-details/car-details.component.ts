import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { DialogBoxComponent } from 'src/app/dialog-box/dialog-box.component';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent {

  contactUs!:FormGroup

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
    })
  }

  getCarDetails(id:number)
  {
    this.httpService.getCarsDetailsFeature(id).subscribe((value)=>{
      console.log(value)
    },(error)=>{
      console.log(error)
    })

    this.httpService.getCarsDetailsSpecification(id).subscribe((value)=>{
      console.log(value)
    },(error)=>{
      console.log(error)
    })

    this.httpService.getCarsDetailsMedia(id).subscribe((value)=>{
      console.log(value)
    },(error)=>{
      console.log(error)
    })

    this.httpService.getCarsDetailsAddress(id).subscribe((value)=>{
      console.log(value)
    },(error)=>{
      console.log(error)
    })

    this.httpService.getCarsDetailsPhoto(id).subscribe((value)=>{
      console.log(value)
    },(error)=>{
      console.log(error)
    })

  }

  opendialogBox(type:string)
  {
    const dialogRef = this.dialog.open(DialogBoxComponent,{
      data:{dialogType:type},
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

}
