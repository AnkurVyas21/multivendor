import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HttpServiceService } from 'src/app/services/http-service.service';

export interface PaymentData {
  paymentId: string;
  carId: string;
  carModel: string;
  paymentDate: string;
  amountPaid: string;
  status: string;
  transactionId: string;
}


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css','../../../assets/css/modern.css'],
  encapsulation: ViewEncapsulation.None,

})
export class TransactionsComponent {

  public paymentList: PaymentData[] = [
    { paymentId: '#P101', carId: '#car01', carModel: 'Toyota Camry 2022', paymentDate: '2025/02/28', amountPaid: '$22,000', status: 'Completed', transactionId: 'TXN123456' },
    { paymentId: '#P102', carId: '#car02', carModel: 'Honda Civic 2021', paymentDate: '2025/03/01', amountPaid: '$20,500', status: 'Pending', transactionId: 'TXN789012' },
    { paymentId: '#P103', carId: '#car03', carModel: 'Ford Mustang 2020', paymentDate: '2025/03/03', amountPaid: '$25,300', status: 'Failed', transactionId: 'TXN345678' },
  ];

  

  public activeLoader = true;

    constructor(private httpService:HttpServiceService)
    {
  
    }

  searchQuery: string = '';
  requests = this.paymentList

displayedColumns: string[] = ['paymentId', 'carId', 'carModel', 'paymentDate', 'amountPaid', 'status', 'transactionId'];

  dataSource = new MatTableDataSource<PaymentData>(this.paymentList);
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

ngOnInit()
  {
    this.getTransactions()
    setTimeout(() => {
      this.activeLoader = false;
    }, 1500);
  }

  getTransactions()
  {
    this.httpService.getTransaction().subscribe((value)=>{
      console.log(value)
    },(error)=>{
      console.log(error)
    })
  }

  filteredRequests = this.requests;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  

  approve(element: any) {
    alert(`Approved: ${element.name}`);
  }

  decline(element: any) {
    alert(`Declined: ${element.name}`);
  }
}

