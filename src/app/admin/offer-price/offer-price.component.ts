import { Component, AfterViewInit, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { AdminDialogComponent } from '../admin-dialog/admin-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs5';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

export interface CarData {
  leadId:string;
  location:string;
  offeredPrice:string;
  customerName: string;
  carModel: string;
  status:string;
}

@Component({
  selector: 'app-offer-price',
  templateUrl: './offer-price.component.html',
  styleUrls: ['./offer-price.component.css','../../../assets/css/modern.css'],
  encapsulation: ViewEncapsulation.None,
})
export class OfferPriceComponent {

  public carList: CarData[] = [
    { leadId: '#201', customerName: 'John Doe', carModel: 'Toyota Camry 2022', status: 'Pending', location: 'New York, USA', offeredPrice: '$22,000' },
    { leadId: '#201', customerName: 'John Doe', carModel: 'Toyota Camry 2022', status: 'Pending', location: 'Los Angeles, USA', offeredPrice: '$21,500' },
    { leadId: '#201', customerName: 'John Doe', carModel: 'Toyota Camry 2022', status: 'Pending', location: 'Chicago, USA', offeredPrice: '$22,300' },
  ];


  constructor(private httpService:HttpServiceService, private route:Router, private dialog:MatDialog)
  {
  
  }
  
  searchQuery: string = '';
  
  public activeLoader = true;
  
  displayedColumns: string[] = ['leadId', 'customerName', 'carModel','location','offeredPrice', 'status', 'actions'];
  dataSource = new MatTableDataSource<CarData>(this.carList);
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  
  
  
 
  ngOnInit()
  {
    this.getOfferPriceList()
    setTimeout(() => {
      this.activeLoader = false;
    }, 1500);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    setTimeout(() => {
      this.activeLoader = false;
    }, 1500);
  }
  
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
   viewDetails(element: CarData) {
      alert(`Viewing details for: ${element.customerName}`);
    }
    getTestDrive() {
      // this.httpService.getTestDrive('pending').subscribe((data) => {
      //   this.carList = data;
      // });
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

     getOfferPriceList()
     {
       this.httpService.getOfferPrice().subscribe((value)=>{
         console.log(value)
       },(error)=>{
         console.log(error)
     })
     }
  
  }














  
 


 



  


