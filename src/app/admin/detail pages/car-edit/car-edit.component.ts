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
      this.getCarDetails(value['id'])
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

  getCarDetails(id:number=25) {
    this.httpService.getCarsDetailsBasics(id).subscribe((value)=>{
      this.fillForm("basics",value)
    })

    this.httpService.getCarsDetailsSpecification(id).subscribe((value)=>{
      this.fillForm("specification",value)
    })

    this.httpService.getCarsDetailsFeature(id).subscribe((value)=>{
      this.fillForm("feature",value)
    })

    this.httpService.getCarsDetailsMedia(id).subscribe((value)=>{
      this.fillForm("media",value)
    })

    this.httpService.getCarsDetailsAddress(id).subscribe((value)=>{
      this.fillForm("address",value)
    })
  }

  fillForm(type:string,value:any)
  {
    if(type=='basics')
    {
      this.carlistingFormBasic = this.fb.group({
        title: [value.title, Validators.required],
        make: [value.make, Validators.required],
        model: [value.title, Validators.required],
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
        transmission: [value.mileage, Validators.required],
        driverType: [value.mileage, Validators.required],
        engineSize: [value.mileage, Validators.required],
        cylinders: [value.mileage, Validators.required],
        fuel: [value.mileage, Validators.required],
        doors: [value.mileage, Validators.required],
        color: [value.mileage, Validators.required],
        seats: [value.mileage, Validators.required],
        cityMPG: [value.mileage, Validators.required],
        highwayMPG: [value.mileage, Validators.required],
      })
      
    }

    if(type=='feature')
    {
      this.carlistingFormFeature = this.fb.group({
        ACFront: [value.mileage],
        ACRear: [value.mileage],
        backupCamera: [value.mileage],
        cruiseControl: [value.mileage],
        navigation: [value.mileage],
        powerLocks: [value.mileage],
        amfmStereo: [value.mileage],
        cdPlayer: [value.mileage],
        dvdSystem: [value.mileage],
        mp3Player: [value.mileage],
        portableAudio: [value.mileage],
        premiumAudio: [value.mileage],
        airbagDriver: [value.mileage],
        airbagPassenger: [value.mileage],
        antilockBrakes: [value.mileage],
        bluetooth: [value.mileage],
        handsFree: [value.mileage],
        fogLights: [value.mileage],
        powerWindows: [value.mileage],
        windowsDefroster: [value.mileage],
        rearWindow: [value.mileage],
        wiperTintedglass: [value.mileage],
        sunroof: [value.mileage],
        towPackage: [value.mileage],
        bucketSeats: [value.mileage],
        heatedSeats: [value.mileage],
        leatherInterior: [value.mileage],
        memorySeats: [value.mileage],
        powerSeats: [value.mileage],
        thirdRowSeats: [value.mileage],
      })
      
    }

    if(type=='media')
    {
      this.carlistingFormMedia = this.fb.group({
        photo1: [value.mileage],
        photo2: [value.mileage],
        photo3: [value.mileage],
        photo4: [value.mileage],
        photo5: [value.mileage],
        video: [value.mileage],
        VINReport: [value.mileage]
      })
      
    }
    if(type=='address')
    {
      this.carlistingFormAddress = this.fb.group({
        address: [value.mileage],
        cityName: [value.mileage]
      })
      
    }

  }

}







