import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpServiceService } from '../services/http-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css', '../../assets/css/modern.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ProfilePageComponent implements OnInit {
  customer: any;
  tabName: string = 'profile';
  currentSubTab = 'account'
  selectSubButton: string = 'testDrive'
  edit = false;
  displayedColumns: string[] = ['id', 'carID', 'name', 'email', 'phone', 'address', 'license'];
  profileForm!: FormGroup;
  biographyForm!: FormGroup;
  constructor(private httpService: HttpServiceService, private fb: FormBuilder) {

  }
  today: string = '';
  @Input() userType: any
 user:any = 'user'

  ngOnInit(): void {
    this.userType = localStorage.getItem('userType')||'admin'
    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const dd = String(now.getDate()).padStart(2, '0');
    this.today = `${yyyy}-${mm}-${dd}`;
    this.loadCustomerDetails();

  }

  loadCustomerDetails() {
    this.httpService.getProfile('user').subscribe((value: any) => {
      this.customer = value.data
      this.biographyForm = this.fb.group({
        biography: [''],
      });

      this.profileForm = this.fb.group({
        firstName: [this.customer.firstName],
        lastName: [this.customer.lastName],
        email: [this.customer.email],
        address: [this.customer.address],
        dob: [''],
        phoneNumber: [''],
        city: [''],
        state: [''],
        zip: ['']
      });
    })
  }

  selectSubType(tab: string) {
    this.selectSubButton = tab;
  }

  openTab(tab: string) {
    this.currentSubTab = tab;
  }

  editProfile() {
    this.edit = true;
  }

  onSubmit(): void {
    this.user = localStorage.getItem('userType')
    console.log(this.profileForm.value);
    let body = {
      "firstName": this.profileForm.value.firstName,
      "lastName": this.profileForm.value.lastName ,
      "email": this.profileForm.value.email,
      "phoneNumber": this.profileForm.value.phoneNumber,
      "dob": this.profileForm.value.dob,
      "address": this.profileForm.value.address,
    }
    this.httpService.updateProfile(body, this.user=='user'?'user':'vendor').subscribe((value: any) => {
      this.edit = false;
    })
  }

  onSubmitBiography(): void {
    console.log(this.biographyForm.value);
      this.edit = false;
    
  }
}