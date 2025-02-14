import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


interface FeaturesGroup {  
  [key: string]: any; // This allows any key of type string to index the object  
}  

@Component({
  selector: 'app-admin-dialog',
  templateUrl: './admin-dialog.component.html',
  styleUrls: ['./admin-dialog.component.css']
})
export class AdminDialogComponent { 
  carlistingFormBasic: FormGroup;
  carlistingFormSpecification: FormGroup;
  carlistingFormFeature: FormGroup;
  carlistingFormMedia: FormGroup;
  carlistingFormAddress:FormGroup

  carForm: FormGroup;  
  conditions = ['New', 'Old'];  
  cylinderOptions = [3, 4, 6];  
  fuelTypes = ['Petrol', 'Diesel', 'EV', 'CNG'];  
  doorOptions = [4, 5];  
  transmissionTypes = ['Automatic', 'Manual'];  
  driverTypes = ['Driver', 'Non-Driver'];  
  selectedImages: string[] = [];
  safetyFeatures = [  
    { name: 'A/C: Front', control: 'safetyACFront' },  
    { name: 'Central Locking', control: 'safetyCentralLocking' },  
    { name: 'Leather', control: 'safetyLeather' },  
    { name: 'Sports Package', control: 'safetySportsPackage' },  
    { name: 'Navigation System', control: 'safetyNavigation' }  
  ];  

  exteriorFeatures = [  
    { name: 'Front Fog Light', control: 'exteriorFogLight' },  
    { name: 'Rain Sensing Wipers', control: 'exteriorRainWipers' },  
    { name: 'Rear Spoilers', control: 'exteriorRearSpoilers' },  
    { name: 'Sun Roof', control: 'exteriorSunRoof' },  
    { name: 'Navigation System', control: 'exteriorNavigation' }  
  ];  

  interiorFeatures = [  
    { name: 'A/C: Front', control: 'interiorACFront' },  
    { name: 'Child Safety Locks', control: 'interiorChildLocks' },  
    { name: 'Leather', control: 'interiorLeather' },  
    { name: 'Driver Air Bags', control: 'interiorDriverAirbags' },  
    { name: 'Navigation System', control: 'interiorNavigation' }  
  ];  

  convenienceFeatures = [  
    { name: 'Power Steering', control: 'conveniencePowerSteering' },  
    { name: 'Vanity Mirror', control: 'convenienceVanityMirror' },  
    { name: 'Trunk Light', control: 'convenienceTrunkLight' }  
  ];  

  banner1: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9T_6u1r7UkktHqK7BXzWXHCYIk7uayFCNyA&s'; // Placeholder for Banner 1
  banner2: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9T_6u1r7UkktHqK7BXzWXHCYIk7uayFCNyA&s'; // Placeholder for Banner 2

  categories = ['Sedan', 'Hatchback', 'SUV', 'Coupe', 'Convertible'];
  selectedCategory: string = this.categories[0]; // Default selection
  commission: number = 5000;
  selectedTabIndex=0
  carDetails = {
    title: 'Edax',
    make: 'Bentley',
    model: '718 Boxster T',
    type: 'Crossover',
    year: '2020',
    condition: 'New',
    stockNumber: '2514251',
    vinNumber: '52415241',
    description: 'Luxury sports car with high performance.',
    priceLabel: true,
    regularPrice: 33000,
    salePrice: 29000,
    requestPrice: 28500
  };

  carSpecs = {
    mileage: '12000',
    transmission: 'Automatic',
    driverType: 'AWD',
    engineSize: '3.0',
    cylinders: '6',
    fuel: 'Petrol',
    doors: '4',
    color: 'Black',
    seats: '5',
    cityMPG: '18',
    highwayMPG: '24'
  };

 public carFeatures:any = {
    ACFront: true,
    ACRear: false,
    backupCamera: true,
    cruiseControl: true,
    navigation: false,
    powerLocks: true,
    amfmStereo: true,
    cdPlayer: false,
    dvdSystem: true,
    mp3Player: true,
    portableAudio: false,
    premiumAudio: true,
    airbagDriver: true,
    airbagPassenger: true,
    antilockBrakes: true,
    bluetooth: true,
    handsFree: true,
    fogLights: false,
    powerWindows: true,
    windowsDefroster: true,
    rearWindow: true,
    wiperTintedglass: false,
    sunroof: false,
    towPackage: true,
    bucketSeats: true,
    heatedSeats: true,
    leatherInterior: false,
    memorySeats: false,
    powerSeats: true,
    thirdRowSeats: false,
  };

  selectedFeatures: string[];

  carMedia = [
    { photoUrl: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Skoda/Kylaq/11528/1733225175669/front-left-side-47.jpg?impolicy=resize&imwidth=480', isEditing: false },
    { photoUrl: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Skoda/Kylaq/11528/1733225175669/front-left-side-47.jpg?impolicy=resize&imwidth=480', isEditing: false },
    { photoUrl: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Skoda/Kylaq/11528/1733225175669/front-left-side-47.jpg?impolicy=resize&imwidth=480', isEditing: false },
    { photoUrl: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Skoda/Kylaq/11528/1733225175669/front-left-side-47.jpg?impolicy=resize&imwidth=480', isEditing: false },
    { photoUrl: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Skoda/Kylaq/11528/1733225175669/front-left-side-47.jpg?impolicy=resize&imwidth=480', isEditing: false }
  ];
  
  videoUrl = 'https://www.youtube.com/watch?v=_X7FJIJbsEs';
  vinReportUrl = '#';
  

 

  public editView = {
    basic:false,
    specification:false,
    feature:false,
    media:false,
    location:false
  }
 

  private createFeaturesGroup(features: { name: string, control: string }[]): FormGroup {  
    const group: FeaturesGroup = {}; // Properly type the group  
    features.forEach(feature => {  
      group[feature.control] = [false]; // Initialize to unchecked  
    });  
    return this.fb.group(group);  
  }  


  constructor(  
    private fb: FormBuilder,  
    public dialogRef: MatDialogRef<AdminDialogComponent>,  
    @Inject(MAT_DIALOG_DATA) public data: any  
  ) {  
    this.carForm = this.fb.group({  
      carName: [''],  
      carPrice: [''],  
      carMake: [''],  
      model: [''],  
      body: [''],  
      description: [''],  
      condition: [''],  
      cylinders: [''],  
      stockNumber: [''],  
      fuelType: [''],  
      vin: [''],  
      doors: [''],  
      year: [''],  
      color: [''],  
      mileage: [''],  
      seats: [''],  
      transmission: [''],  
      cityMPG: [''],  
      engineSize: [''],  
      highwayMPG: [''],  
      driverType: [''],  
      images: [null],  
      features: this.fb.group({  
        safety: this.createFeaturesGroup(this.safetyFeatures),  
        exterior: this.createFeaturesGroup(this.exteriorFeatures),  
        interior: this.createFeaturesGroup(this.interiorFeatures),  
        convenience: this.createFeaturesGroup(this.convenienceFeatures),  
      })  
    });  

    this.selectedFeatures = Object.keys(this.carFeatures).filter(
      (key) => this.carFeatures[key]
    );

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

  ngOnInit() {
  
    this.carlistingFormBasic.patchValue(this.carDetails);
    this.carlistingFormSpecification.patchValue(this.carSpecs);
    this.carlistingFormFeature.patchValue(this.carFeatures);
    this.carlistingFormMedia.patchValue(this.carMedia);
    // this.carlistingFormAddress.patchValue(this.carDetails);
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.selectedImages = []; // Clear previous selections
      Array.from(input.files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = (e: ProgressEvent<FileReader>) => {
          if (e.target && e.target.result) {
            this.selectedImages.push(e.target.result as string);
          }
        };
        reader.readAsDataURL(file);
      });
    }
  }

  deleteImage(index: number): void {
    this.selectedImages.splice(index, 1); // Remove the selected image by index
  }

  onSubmit() {  
    console.log(this.carForm.value);  
  }  

  onImageChange(event: any, bannerNumber: number) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        if (bannerNumber === 1) {
          this.banner1 = e.target.result;
        } else {
          this.banner2 = e.target.result;
        }
      };
      reader.readAsDataURL(file);
    }
  }

  updateCommission() {
    alert(`Commission for ${this.selectedCategory} updated to ₹${this.commission}`);
  }

  editDetails() {
    this.editView.basic=true;
    console.log('Edit button clicked!');
  }

  editSpecifications() {
    console.log('Edit button clicked!');
    this.editView.specification=true;
  }

  editFeatures() {
    console.log('Edit button clicked!');
    this.editView.feature=true;

  }

  editMedia()
  {
    this.editView.media = true;
  }

  editLocation()
  {
    this.editView.location=true;
  }

  toggleEdit(index: number) {
    this.carMedia[index].isEditing = !this.carMedia[index].isEditing;
  }
  
  saveMedia(index: number) {
    this.carMedia[index].isEditing = false;
  }

  onCarEditFormSubmit(form:FormGroup, nextIndex:number) {
    console.log(form)
    if (form.valid) {
       this.editView 
       this.editView.basic=false,
       this.editView.specification=false,
       this.editView.feature=false,
       this.editView.media=false,
       this.editView.location=false
  
      console.log('Form Submitted', form.value);
     
    } else {
      console.log('Form is invalid');
    }
  }
}  