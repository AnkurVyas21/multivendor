import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent {

  constructor(private httpService:HttpServiceService, private route:Router)
  {

  }


  searchQuery: string = '';
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

displayedColumns: string[] = ['id', 'carID', 'name', 'email', 'phone', 'address', 'license','actions'];


  filteredRequests = this.requests;


  
  ngOnInit()
  {
    this.carListApi()
  }

  carListApi()
  {
    this.httpService.getCars('all').subscribe((value)=>{
      if(value.success)
      {
        this.requests = value.cars;
      }
    },(error)=>{

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

  viewCar(id: any=25) {
   this.route.navigate(['vendor/car-detail/'+id])
  }

  editCar(id: any=25) {
    this.route.navigate(['vendor/car-edit/'+id])

  }

}


