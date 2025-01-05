import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  }  

  private createFeaturesGroup(features: { name: string, control: string }[]): FormGroup {  
    const group: FeaturesGroup = {}; // Properly type the group  
    features.forEach(feature => {  
      group[feature.control] = [false]; // Initialize to unchecked  
    });  
    return this.fb.group(group);  
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
}  