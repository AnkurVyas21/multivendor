import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {



  searchQuery: string = '';
  requests = [
    {
        "id": 1,
        "name": "Ankur Vyas",
        "email": "ankurvyas033@gmail.com",
        "phone": "9303493424",
        "address": "H. No. 239",
        "license": "5494654654"
    },
    {
        "id": 2,
        "name": "Rahul Sharma",
        "email": "rahul.sharma@gmail.com",
        "phone": "9876543210",
        "address": "Flat No. 12, Green Park",
        "license": "9876543211"
    },
    {
        "id": 3,
        "name": "Priya Verma",
        "email": "priya.verma@example.com",
        "phone": "9123456789",
        "address": "House No. 45, Lake View",
        "license": "1234567890"
    },
    {
        "id": 4,
        "name": "Amit Singh",
        "email": "amit.singh@gmail.com",
        "phone": "9988776655",
        "address": "B-22, Skyline Apartments",
        "license": "1122334455"
    },
    {
        "id": 5,
        "name": "Neha Gupta",
        "email": "neha.gupta@example.com",
        "phone": "9871234567",
        "address": "Sector 14, Noida",
        "license": "6677889900"
    },
    {
      "id": 6,
      "name": "Neha Gupta",
      "email": "neha.gupta@example.com",
      "phone": "9871234567",
      "address": "Sector 14, Noida",
      "license": "6677889900"
  },
  {
    "id": 7,
    "name": "Neha Gupta",
    "email": "neha.gupta@example.com",
    "phone": "9871234567",
    "address": "Sector 14, Noida",
    "license": "6677889900"
},
{
  "id": 8,
  "name": "Neha Gupta",
  "email": "neha.gupta@example.com",
  "phone": "9871234567",
  "address": "Sector 14, Noida",
  "license": "6677889900"
},
{
  "id": 9,
  "name": "Neha Gupta",
  "email": "neha.gupta@example.com",
  "phone": "9871234567",
  "address": "Sector 14, Noida",
  "license": "6677889900"
},{
  "id": 8,
  "name": "Neha Gupta",
  "email": "neha.gupta@example.com",
  "phone": "9871234567",
  "address": "Sector 14, Noida",
  "license": "6677889900"
},
{
  "id": 9,
  "name": "Neha Gupta",
  "email": "neha.gupta@example.com",
  "phone": "9871234567",
  "address": "Sector 14, Noida",
  "license": "6677889900"
},{
  "id": 8,
  "name": "Neha Gupta",
  "email": "neha.gupta@example.com",
  "phone": "9871234567",
  "address": "Sector 14, Noida",
  "license": "6677889900"
},
{
  "id": 9,
  "name": "Neha Gupta",
  "email": "neha.gupta@example.com",
  "phone": "9871234567",
  "address": "Sector 14, Noida",
  "license": "6677889900"
},{
  "id": 8,
  "name": "Neha Gupta",
  "email": "neha.gupta@example.com",
  "phone": "9871234567",
  "address": "Sector 14, Noida",
  "license": "6677889900"
},
{
  "id": 9,
  "name": "Neha Gupta",
  "email": "neha.gupta@example.com",
  "phone": "9871234567",
  "address": "Sector 14, Noida",
  "license": "6677889900"
},{
  "id": 8,
  "name": "Neha Gupta",
  "email": "neha.gupta@example.com",
  "phone": "9871234567",
  "address": "Sector 14, Noida",
  "license": "6677889900"
},
{
  "id": 9,
  "name": "Neha Gupta",
  "email": "neha.gupta@example.com",
  "phone": "9871234567",
  "address": "Sector 14, Noida",
  "license": "6677889900"
},{
  "id": 8,
  "name": "Neha Gupta",
  "email": "neha.gupta@example.com",
  "phone": "9871234567",
  "address": "Sector 14, Noida",
  "license": "6677889900"
},
{
  "id": 9,
  "name": "Neha Gupta",
  "email": "neha.gupta@example.com",
  "phone": "9871234567",
  "address": "Sector 14, Noida",
  "license": "6677889900"
}
]

displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'address', 'license'];


  filteredRequests = this.requests;

  constructor(public router:Router, private httpService:HttpServiceService)
  {

  }

  ngOnInit()
  {
    this.getCustomerList()
  }

  getCustomerList()
  {
    this.httpService.getCustomer('33').subscribe((value)=>{
      this.requests = value.customerList
  },(error)=>{
    console.log(error)
  })
  }

  onSearch() {
    const query = this.searchQuery.toLowerCase();
    this.filteredRequests = this.requests.filter(
      (req) =>
        req.name.toLowerCase().includes(query) ||
        req.email.toLowerCase().includes(query) ||
        req.id.toString().includes(query)
    );
  }

  approve(element: any) {
    alert(`Approved: ${element.name}`);
  }

  decline(element: any) {
    alert(`Declined: ${element.name}`);
  }

  navigateToCustomer()
  {
    this.router.navigate(['vendor/customer-details/25'])
  }
  

}
