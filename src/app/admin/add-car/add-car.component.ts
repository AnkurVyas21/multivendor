import { AfterViewInit, ChangeDetectorRef, Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { AdminDialogComponent } from '../admin-dialog/admin-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';
import { param } from 'jquery';
import { carBrands } from 'src/app/common/config';
import { carCategories } from 'src/app/common/config';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements AfterViewInit {
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
  carId=''
  mediaArray = ['photo1','photo2','photo3','photo4','photo5','VINReport']
  public carBrandsNames: any = []
  public carCategoriesNames:any= []


  constructor(private fb: FormBuilder, private httpService: HttpServiceService,  private cdr: ChangeDetectorRef,private dialog: MatDialog, private router: Router, private route: ActivatedRoute,) {
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
    this.carBrandsNames = carBrands.filter((brand:any) => brand.name).map((brand:any) => brand.name)
    this.carCategoriesNames = carCategories.filter((category:any) => category.category).map((category:any) => category.category)
  }
  ngAfterViewInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.selectedTabIndex = parseInt(params.get('formType') || '0', 10);
      this.tabsAccess[this.selectedTabIndex] = true;
      this.carId = params.get('id') || '';
      this.cdr.detectChanges();
    })
  }

  selectPayload(formType:string,form:FormGroup){
    const timestamp = new Date().toISOString();
    if(formType=='add-basic') {return {
        ...form.value,
        id: null,

        status: null,
        createTime: timestamp,
        updateTime: timestamp
      }}
      else if (formType=='add-media'){
  console.log(this.carlistingFormMedia,'this.carlistingFormMedia.value')
         const formData = new FormData();
 ['photo1', 'photo2', 'photo3', 'photo4', 'photo5'].forEach(key => {
    const file = this.carlistingFormMedia.get(key)?.value;
    if (file) {
      formData.append(key, file, file.name);
    }
  })
  const vinReportFile = this.carlistingFormMedia.get('VINReport')?.value;
  if (vinReportFile) {
    formData.append('VINReport', vinReportFile, vinReportFile.name);
  }
    const videoString = this.carlistingFormMedia.get('video')?.value;
  if (videoString) {
    formData.append('video', videoString); // simple string field
  }

        return formData
      }
      else return {
        ...form.value,
        id: null,
      };
}

  onSubmit(form: FormGroup, nextIndex: number) {
    if (form.valid) {
      const timestamp = new Date().toISOString();

      const payload = this.selectPayload(this.formType(nextIndex),form)

      let vendorId = localStorage.getItem('vendorId');
      if (vendorId == null) {
        vendorId = ''
      }
      let id = this.formType(nextIndex)=='add-basic' ? vendorId : this.carId;
      this.httpService.addCar(payload, this.formType(nextIndex), parseInt(id)).subscribe(
        (value) => {
          console.log(value);
          if (nextIndex !== 5) {
            this.tabsAccess[nextIndex] = true; // Enable the next tab
            this.selectedTabIndex = nextIndex; // Move to the next tab
            this.router.navigate([], {
              relativeTo: this.route,
              queryParams: {
                id: value?.data?.carId ? value.data.carId : this.carId,
                formType: nextIndex
              },
              queryParamsHandling: 'merge' // keep other query params
            });
          } else {
            this.openDialog('addCarSuccess');
          }
        },
        (error) => {
          console.log('Error Handling')
        }
      );

      console.log('Form Submitted', payload);
    } else {
      console.log('Form is invalid');
    }
  }


  formType(index: number) {
    switch (index) {
      case 1:
        return 'add-basic'

      case 2:
        return 'add-specifications'

      case 3:
        return 'add-features'

      case 4:
        return 'add-media'

      case 5:
        return 'add-address'

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
      reader.readAsDataURL(file);
        // Only allow image uploads for photo1-5
 // Only allow image uploads for photo1-5
  if (this.mediaArray[index].startsWith('photo') && !file.type.startsWith('image/')) {
    alert('Only image files are allowed for photos.');
    return;
  }

  // For VINReport, accept PDF or Word files
  if (this.mediaArray[index] === 'VINReport' && !file.type.match(/(pdf|msword|officedocument)/)) {
    alert('Only PDF or Word documents allowed for VIN Report.');
    return;
  }

  this.carlistingFormMedia.patchValue({ [this.mediaArray[index]]: file });
    }

  }
}


