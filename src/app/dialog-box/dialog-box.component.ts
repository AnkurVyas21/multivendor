import { HttpServiceService } from 'src/app/services/http-service.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { usCarBrands } from '../common/config'
import { Route, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {

  public testDriveForm!: FormGroup;
  public makeOfferForm!: FormGroup;
 public  filterForm!: FormGroup;
 public minDateTime:any
 public usCarBrands = usCarBrands
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DialogBoxComponent>, 
    private fb: FormBuilder,
    private httpservice:HttpServiceService,
    private route:Router,
    private ActivatedRoute:ActivatedRoute
    
  ) {
     const now = new Date();
    now.setDate(now.getDate() + 1); // Tomorrow
    now.setSeconds(0, 0); // remove seconds and milliseconds

    // Format to 'yyyy-MM-ddTHH:mm'
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    this.minDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;
  }

  ngOnInit() {  // Corrected method name
    console.log('dialogRef:', this.dialogRef);

    this.testDriveForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],  // Fixed array syntax
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]], // Fixed pattern
      address: ['', Validators.required],
      license: ['', Validators.required],
      date:['',Validators.required]
    });

    this.makeOfferForm = this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required],
      phone:['',Validators.required],
      address:['',Validators.required],
      license:['',Validators.required],
      offeredPrice:['',Validators.required],
      finalOfferedPrice:['',Validators.required],
    })

    this.filterForm = this.fb.group({
      make: [''],
      transmission: [''],
      condition: [''],
      model: [''],
      year: [''],
      engineSize: [''],
      mapLocation: [''],
      color: ['']
    });

    this.ActivatedRoute.queryParams.subscribe(params => {
    this.filterForm.patchValue(params);
  });

  
  }

  submitTestDrive() {
      console.log('Form Data:', this.testDriveForm.value);
    if (this.testDriveForm.valid) {
      this.sendTestDrive()
      this.dialogRef.close(this.testDriveForm.value); // Closing dialog with form data
    } else {
      console.log('Form is invalid');
    }
  }

  submitMakeOffer()
  {
    if(this.makeOfferForm.valid)
   this.sendMakeOffer()
  }

  sendTestDrive()
  {
    let payload ={
  carId: this.data.id,
  drivingLicenseNumber: this.testDriveForm.value.license,
  appointmentTime: this.testDriveForm.value.date,
  userId: localStorage.getItem('userId'),
}
    this.httpservice.sendTestDrive(payload).subscribe((value)=>{
      console.log(value)
    },(error)=>{
      console.log(error)
    })
  }

  sendMakeOffer()
  {
    let payload ={
  carId: this.data.id,
  drivingLicenseNumber: this.makeOfferForm.value.license,
  offeredPrice: this.makeOfferForm.value.offeredPrice,
  finalOfferedPrice: this.makeOfferForm.value.finalOfferedPrice
}
    this.httpservice.sendMakeOffer(payload).subscribe((value)=>{
      console.log(value)
    },(error)=>{
      console.log(error)
    })
  }

  onFilterSubmit()
  {
    if (this.filterForm.valid) {
  const raw = this.filterForm.value;
  const cleaned = Object.fromEntries(
    Object.entries(raw).filter(([_, v]) => v !== '' && v !== null)
  );

  this.route.navigate(['/search'], {
    queryParams: cleaned
  });
}
  }

  resetForm()
  {
    this.filterForm.reset()
  }
}
