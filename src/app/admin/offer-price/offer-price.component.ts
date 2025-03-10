import { Component } from '@angular/core';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { AdminDialogComponent } from '../admin-dialog/admin-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-offer-price',
  templateUrl: './offer-price.component.html',
  styleUrls: ['./offer-price.component.css']
})
export class OfferPriceComponent {
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

displayedColumns: string[] = ['id', 'carID', 'name', 'email', 'phone', 'address', 'license', 'actions'];


  filteredRequests = this.requests;

  constructor(private httpService:HttpServiceService,private dialog:MatDialog)
  {

  }

  ngOnInit()
  {
    this.getOfferPriceList()
  }

  getOfferPriceList()
  {
    this.httpService.getOfferPrice().subscribe((value)=>{
      console.log(value)
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
    this.openDialog('approveOfferPrice')
    
  }

  decline(element: any) {
    this.openDialog('declineOfferPrice')

  }


    openDialog(type:string)
     {
        const dialogRef =  this.dialog.open(AdminDialogComponent,{
        data:{type:type},
        width:'450px',
       })
    
       dialogRef.afterClosed().subscribe(result=>{
        console.log('addCar', result)
       })
     }
}

