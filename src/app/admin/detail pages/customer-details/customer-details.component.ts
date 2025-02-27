import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  customer: any;
  tabName:string= 'inquires';
  selectSubButton:string = 'testDrive'

  requests = [
    {
        "id": 1,
        "carID": "CAR1001",
        "name": "Ankur Vyas",
        "email": "ankurvyas033@gmail.com",
        "phone": "9303493424",
        "address": "H. No. 239",
        "license": "5494654654"
    },
    {
        "id": 2,
        "carID": "CAR1002",
        "name": "Rahul Sharma",
        "email": "rahul.sharma@gmail.com",
        "phone": "9876543210",
        "address": "Flat No. 12, Green Park",
        "license": "9876543211"
    },
    {
        "id": 3,
        "carID": "CAR1003",
        "name": "Priya Verma",
        "email": "priya.verma@example.com",
        "phone": "9123456789",
        "address": "House No. 45, Lake View",
        "license": "1234567890"
    },
    {
        "id": 4,
        "carID": "CAR1004",
        "name": "Amit Singh",
        "email": "amit.singh@gmail.com",
        "phone": "9988776655",
        "address": "B-22, Skyline Apartments",
        "license": "1122334455"
    },
    {
        "id": 5,
        "carID": "CAR1005",
        "name": "Neha Gupta",
        "email": "neha.gupta@example.com",
        "phone": "9871234567",
        "address": "Sector 14, Noida",
        "license": "6677889900"
    },
    {
      "id": 6,
      "carID": "CAR1005",
      "name": "Neha Gupta",
      "email": "neha.gupta@example.com",
      "phone": "9871234567",
      "address": "Sector 14, Noida",
      "license": "6677889900"
  },
  {
    "id": 7,
    "carID": "CAR1005",
    "name": "Neha Gupta",
    "email": "neha.gupta@example.com",
    "phone": "9871234567",
    "address": "Sector 14, Noida",
    "license": "6677889900"
},
{
  "id": 8,
  "carID": "CAR1005",
  "name": "Neha Gupta",
  "email": "neha.gupta@example.com",
  "phone": "9871234567",
  "address": "Sector 14, Noida",
  "license": "6677889900"
},
{
  "id": 9,
  "carID": "CAR1005",
  "name": "Neha Gupta",
  "email": "neha.gupta@example.com",
  "phone": "9871234567",
  "address": "Sector 14, Noida",
  "license": "6677889900"
},{
  "id": 8,
  "carID": "CAR1005",
  "name": "Neha Gupta",
  "email": "neha.gupta@example.com",
  "phone": "9871234567",
  "address": "Sector 14, Noida",
  "license": "6677889900"
},
{
  "id": 9,
  "carID": "CAR1005",
  "name": "Neha Gupta",
  "email": "neha.gupta@example.com",
  "phone": "9871234567",
  "address": "Sector 14, Noida",
  "license": "6677889900"
},{
  "id": 8,
  "carID": "CAR1005",
  "name": "Neha Gupta",
  "email": "neha.gupta@example.com",
  "phone": "9871234567",
  "address": "Sector 14, Noida",
  "license": "6677889900"
},
{
  "id": 9,
  "carID": "CAR1005",
  "name": "Neha Gupta",
  "email": "neha.gupta@example.com",
  "phone": "9871234567",
  "address": "Sector 14, Noida",
  "license": "6677889900"
},{
  "id": 8,
  "carID": "CAR1005",
  "name": "Neha Gupta",
  "email": "neha.gupta@example.com",
  "phone": "9871234567",
  "address": "Sector 14, Noida",
  "license": "6677889900"
},
{
  "id": 9,
  "carID": "CAR1005",
  "name": "Neha Gupta",
  "email": "neha.gupta@example.com",
  "phone": "9871234567",
  "address": "Sector 14, Noida",
  "license": "6677889900"
},{
  "id": 8,
  "carID": "CAR1005",
  "name": "Neha Gupta",
  "email": "neha.gupta@example.com",
  "phone": "9871234567",
  "address": "Sector 14, Noida",
  "license": "6677889900"
},
{
  "id": 9,
  "carID": "CAR1005",
  "name": "Neha Gupta",
  "email": "neha.gupta@example.com",
  "phone": "9871234567",
  "address": "Sector 14, Noida",
  "license": "6677889900"
},{
  "id": 8,
  "carID": "CAR1005",
  "name": "Neha Gupta",
  "email": "neha.gupta@example.com",
  "phone": "9871234567",
  "address": "Sector 14, Noida",
  "license": "6677889900"
},
{
  "id": 9,
  "carID": "CAR1005",
  "name": "Neha Gupta",
  "email": "neha.gupta@example.com",
  "phone": "9871234567",
  "address": "Sector 14, Noida",
  "license": "6677889900"
}
]

displayedColumns: string[] = ['id', 'carID', 'name', 'email', 'phone', 'address', 'license'];


  filteredRequests = this.requests;


  
  @Input()  userType = ''

  ngOnInit(): void {
    this.loadCustomerDetails();
  }

  loadCustomerDetails() {
    // Dummy customer data for ID 25
    this.customer = {
      id: '25',
      name: 'Amit Sharma',
      email: 'amit@example.com',
      status: 'Active',
      inquiries: [
        { id: 1, car: 'Toyota Camry', date: '2024-01-10' },
        { id: 2, car: 'Honda Civic', date: '2024-02-15' }
      ],
      purchasedCars: ['Ford Mustang', 'BMW X5']
    };
  }

  getStatusClass(status: string): string {
    return status === 'Active' ? 'bg-success text-white' : 'bg-warning text-dark';
  }

  suspendUser() {
    this.customer.status = 'Suspended';
  }

  removeUser() {
    if (confirm('Are you sure you want to remove this customer?')) {
      this.customer = null; // Simulating removal
      alert('Customer removed successfully!');
    }
  }

  selectTab(tab:string)
  {
    this.tabName = tab;
  }

  selectSubType(tab:string)
  {
    this.selectSubButton = tab;
  }
}