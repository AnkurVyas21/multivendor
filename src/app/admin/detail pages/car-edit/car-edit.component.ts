import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { AdminDialogComponent } from '../../admin-dialog/admin-dialog.component';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent {
  carlistingFormBasic: FormGroup;
  carlistingFormSpecification: FormGroup;
  carlistingFormFeature: FormGroup;
  carlistingFormMedia: FormGroup;
  carlistingFormAddress: FormGroup
  selectedTabIndex = 0
  imagePreview: string | ArrayBuffer | null = null;
  imagesList: any = []
  tabsAccess = [true, false, false, false, false];
  @Input() vendor = false;

  constructor(private fb: FormBuilder, private httpService: HttpServiceService, private dialog: MatDialog,private route:ActivatedRoute) {
  console.log('constuctor running')
    this.carlistingFormBasic = this.fb.group({
      title: ['', Validators.required],
      make: ['', Validators.required],
      model: ['', Validators.required],
      type: ['', Validators.required],
      year: ['', [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]],
      condition: ['', Validators.required],
      stockNumber: ['', Validators.required],
      vinNumber: ['', Validators.required],
      description: ['', Validators.maxLength(500)],
      priceLabel: [false],
      regularPrice: ['', [Validators.required, Validators.min(1)]],
      salePrice: ['', Validators.required],
      requestPrice: ['', Validators.required],
    })

    this.carlistingFormSpecification = this.fb.group({
      mileage: ['', Validators.required],
      transmission: ['', Validators.required],
      driverType: ['', Validators.required],
      engineSize: ['', Validators.required],
      cylinders: ['', Validators.required],
      fuel: ['', Validators.required],
      doors: ['', Validators.required],
      color: ['', Validators.required],
      seats: ['', Validators.required],
      cityMPG: ['', Validators.required],
      highwayMPG: ['', Validators.required],
    })

    this.carlistingFormFeature = this.fb.group({
      ACFront: [false],
      ACRear: [false],
      backupCamera: [false],
      cruiseControl: [false],
      navigation: [false],
      powerLocks: [false],
      amfmStereo: [false],
      cdPlayer: [false],
      dvdSystem: [false],
      mp3Player: [false],
      portableAudio: [false],
      premiumAudio: [false],
      airbagDriver: [false],
      airbagPassenger: [false],
      antilockBrakes: [false],
      bluetooth: [false],
      handsFree: [false],
      fogLights: [false],
      powerWindows: [false],
      windowsDefroster: [false],
      rearWindow: [false],
      wiperTintedglass: [false],
      sunroof: [false],
      towPackage: [false],
      bucketSeats: [false],
      heatedSeats: [false],
      leatherInterior: [false],
      memorySeats: [false],
      powerSeats: [false],
      thirdRowSeats: [false],
    })

    this.carlistingFormMedia = this.fb.group({
      photo1: [null],
      photo2: [null],
      photo3: [null],
      photo4: [null],
      photo5: [null],
      video: [''],
      VINReport: ['']
    })

    this.carlistingFormAddress = this.fb.group({
      address: [''],
      cityName: ['']
    })

  }

  ngOnInit()
  {
    this.route.paramMap.subscribe((value:any)=>{
      console.log(value)
      this.getCarDetails(value.params.id)
    })
  }

  onSubmit(form: FormGroup, nextIndex: number) {
    if (form.valid) {
      this.httpService.updateCar(form.value, this.formType(nextIndex)).subscribe((value) => {

      }, (error) => {
        if (nextIndex != 5) {
          this.tabsAccess[nextIndex] = true; // Enable the next tab
          this.selectedTabIndex = nextIndex; // Move to the next tab
        }
        else {
          this.openDialog('addCarSuccess')
        }
      })
      console.log('Form Submitted', form.value);
    } else {
      console.log('Form is invalid');
    }
  }

  formType(index: number) {
    switch (index) {
      case 1:
        return 'add-basic'

      case 2:
        return '1/add-specifications'

      case 3:
        return '1/add-features'

      case 4:
        return '1/add-media'

      case 5:
        return '1/add-address'

      default:
        return ''
    }
  }

  openDialog(type: string) {
    const dialogRef = this.dialog.open(AdminDialogComponent, {
      data: { type: type },
      width: '450px',
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('addCar', result)
    })
  }

  deleteImage(formType: string) {
    this.carlistingFormMedia.get(formType)?.reset()
  }

  onFileSelected(event: Event, index: number): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
        this.imagesList[index] = this.imagePreview
      };
      reader.readAsDataURL(file); // Convert file to Base64
    }
  }

  getCarDetails(id:number) {
    this.httpService.getCarsDetailsBasics(id).subscribe((value)=>{
      console.log(value,'value')
      this.fillForm("basics",value.data)
    })

    this.httpService.getCarsDetailsSpecification(id).subscribe((value)=>{
      this.fillForm("specification",value.data)
    })

    this.httpService.getCarsDetailsFeature(id).subscribe((value)=>{
      this.fillForm("feature",value.data)
    })

    this.httpService.getCarsDetailsMedia(id).subscribe((value)=>{
      this.fillForm("media",value.data)
    })

    this.httpService.getCarsDetailsAddress(id).subscribe((value)=>{
      this.fillForm("address",value.data)
    })
  }

  fillForm(type:string,value:any)
  {
    if(type=='basics')
    {
      this.carlistingFormBasic = this.fb.group({
        title: [value.title, Validators.required],
        make: [value.make, Validators.required],
        model: [value.model, Validators.required],
        type: [value.type, Validators.required],
        year: [value.year, [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]],
        condition: [value.condition, Validators.required],
        stockNumber: [value.stockNumber, Validators.required],
        vinNumber: [value.vinNumber, Validators.required],
        description: [value.description, Validators.maxLength(500)],
        priceLabel: [value.priceLabel],
        regularPrice: [value.regularPrice, [Validators.required, Validators.min(1)]],
        salePrice: [value.salePrice, Validators.required],
        requestPrice: [value.requestPrice, Validators.required],
      })
    }
    if(type=='specification')
    {
      this.carlistingFormSpecification = this.fb.group({
        mileage: [value.mileage, Validators.required],
        transmission: [value.transmission, Validators.required],
        driverType: [value.driverType, Validators.required],
        engineSize: [value.engineSize, Validators.required],
        cylinders: [value.cylinders, Validators.required],
        fuel: [value.fuel, Validators.required],
        doors: [value.doors, Validators.required],
        color: [value.color, Validators.required],
        seats: [value.seats, Validators.required],
        cityMPG: [value.cityMPG, Validators.required],
        highwayMPG: [value.highwayMPG, Validators.required],
      })
      
    }

    if(type=='feature')
    {
      this.carlistingFormFeature = this.fb.group({
        ACFront: [value.ACFront],
        ACRear: [value.ACRear],
        backupCamera: [value.backupCamera],
        cruiseControl: [value.cruiseControl],
        navigation: [value.navigation],
        powerLocks: [value.powerLocks],
        amfmStereo: [value.amfmStereo],
        cdPlayer: [value.cdPlayer],
        dvdSystem: [value.dvdSystem],
        mp3Player: [value.mp3Player],
        portableAudio: [value.portableAudio],
        premiumAudio: [value.premiumAudio],
        airbagDriver: [value.airbagDriver],
        airbagPassenger: [value.airbagPassenger],
        antilockBrakes: [value.antilockBrakes],
        bluetooth: [value.bluetooth],
        handsFree: [value.handsFree],
        fogLights: [value.fogLights],
        powerWindows: [value.powerWindows],
        windowsDefroster: [value.windowsDefroster],
        rearWindow: [value.rearWindow],
        wiperTintedglass: [value.wiperTintedglass],
        sunroof: [value.sunroof],
        towPackage: [value.towPackage],
        bucketSeats: [value.bucketSeats],
        heatedSeats: [value.heatedSeats],
        leatherInterior: [value.leatherInterior],
        memorySeats: [value.memorySeats],
        powerSeats: [value.powerSeats],
        thirdRowSeats: [value.thirdRowSeats]
      })
      
    }

    if(type=='media')
    {
      this.carlistingFormMedia = this.fb.group({
        photo1: [value.photo1],
        photo2: [value.photo2],
        photo3: [value.photo3],
        photo4: [value.photo4],
        photo5: [value.photo5],
        video: [value.videoUrl],
        VINReport: [value.vinReport]
      })
      this.imagesList[0] = value.photo1
      this.imagesList[1] = value.photo2
      this.imagesList[2] = value.photo3
      this.imagesList[3] = value.photo4
      this.imagesList[4] = value.photo5
    }
    if(type=='address')
    {
      this.carlistingFormAddress = this.fb.group({
        address: [value.address],
        cityName: [value.mapLocation]
      })
      
    }

  }

}







