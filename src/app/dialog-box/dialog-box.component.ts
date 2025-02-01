import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {

  public testDriveForm!: FormGroup;
  public makeOfferForm!: FormGroup;
 public  filterForm!: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DialogBoxComponent>, 
    private fb: FormBuilder
  ) {
    console.log('data:', this.data);
  }

  ngOnInit() {  // Corrected method name
    console.log('dialogRef:', this.dialogRef);

    this.testDriveForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],  // Fixed array syntax
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]], // Fixed pattern
      address: ['', Validators.required],
      license: ['', Validators.required]
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
      brand: [''],
      transmission: [''],
      used: [false],
      model: [''],
      year: [''],
      engineSize: [''],
      location: [''],
      color: ['']
    });
  }

  submitTestDrive() {
    console.log('Form Data:', this.testDriveForm);
    if (this.testDriveForm.valid) {
      console.log('Form Data:', this.testDriveForm.value);
      this.dialogRef.close(this.testDriveForm.value); // Closing dialog with form data
    } else {
      console.log('Form is invalid');
    }
  }

  submitMakeOffer()
  {
    console.log(this.makeOfferForm)
  }
}
