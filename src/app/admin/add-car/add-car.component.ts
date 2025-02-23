import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent {
  carlistingFormBasic: FormGroup;
  carlistingFormSpecification: FormGroup;
  carlistingFormFeature: FormGroup;
  carlistingFormMedia: FormGroup;
  carlistingFormAddress:FormGroup
  selectedTabIndex=0
  tabsAccess = [true, false, false,false,false];
  @Input() vendor = false;

  constructor(private fb: FormBuilder, private httpService:HttpServiceService) {
    this.carlistingFormBasic = this.fb.group({
      title: ['', Validators.required],
      make: ['', Validators.required],
      model: ['', Validators.required],
      type: ['', Validators.required],
      year: ['', [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]],
      condition: ['', Validators.required],
      stockNumber: ['', Validators.required],
      vinNumber:['',Validators.required],
      description: ['', Validators.maxLength(500)],
      priceLabel:[false],
      regularPrice: ['', [Validators.required, Validators.min(1)]],
      salePrice:['',Validators.required],
      requestPrice:['',Validators.required],
    })

    this.carlistingFormSpecification = this.fb.group({
      mileage:['',Validators.required],
      transmission: ['', Validators.required],
      driverType:['', Validators.required],
      engineSize:['',Validators.required],
      cylinders:['',Validators.required],
      fuel: ['', Validators.required],
      doors:['',Validators.required],
      color:['',Validators.required],
      seats:['',Validators.required],
      cityMPG:['',Validators.required],
      highwayMPG:['',Validators.required],
    })

    this.carlistingFormFeature = this.fb.group({
      ACFront:[false],
      ACRear:[false],
      backupCamera:[false],
      cruiseControl:[false],
      navigation:[false],
      powerLocks:[false],
      amfmStereo:[false],
      cdPlayer:[false],
      dvdSystem:[false],
      mp3Player:[false],
      portableAudio:[false],
      premiumAudio:[false],
      airbagDriver:[false],
      airbagPassenger:[false],
      antilockBrakes:[false],
      bluetooth:[false],
      handsFree:[false],
      fogLights:[false],
      powerWindows:[false],
      windowsDefroster:[false],
      rearWindow:[false],
      wiperTintedglass:[false],
      sunroof:[false],
      towPackage:[false],
      bucketSeats:[false],
      heatedSeats:[false],
      leatherInterior:[false],
      memorySeats:[false],
      powerSeats:[false],
      thirdRowSeats:[false],
    })

this.carlistingFormMedia = this.fb.group({
      photo1:[''],
      photo2:[''],
      photo3:[''],
      photo4:[''],
      photo5:[''],
      video:[''],
      VINReport:['']
    })

    this.carlistingFormAddress = this.fb.group({
      address:[''],
      cityName:['']
    })

  }

  onSubmit(form:FormGroup, nextIndex:number) {
    console.log(form)
    console.log(this.vendor)
    if (form.valid) {
      this.httpService.addCar(form.value).subscribe((value)=>{

      },(error)=>{
        if(nextIndex !=5)
          {  this.tabsAccess[nextIndex] = true; // Enable the next tab
            this.selectedTabIndex = nextIndex; // Move to the next tab
            }
      })
      console.log('Form Submitted', form.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
