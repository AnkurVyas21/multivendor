import { formatDate } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import 'datatables.net';
import 'datatables.net-bs5';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { AdminDialogComponent } from '../admin-dialog/admin-dialog.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css','../../../assets/css/modern.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CustomerListComponent {



  searchQuery: string = '';
  requests = []
  userList: any=[{}];


displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'enabled', 'createdAt'];
  dataSource = new MatTableDataSource<any>(this.userList);


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
    this.httpService.getCustomer().subscribe((value)=>{
      this.requests = value
     this.dataSource = new MatTableDataSource<any>(this.requests);

      console.log(this.requests)
  },(error)=>{
    console.log(error)
  })
  }

  onSearch() {
    // const query = this.searchQuery.toLowerCase();
    // this.filteredRequests = this.requests.filter(
    //   (req) =>
    //     req.name.toLowerCase().includes(query) ||
    //     req.email.toLowerCase().includes(query) ||
    //     req.id.toString().includes(query)
    // );
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
  
  convertDate(date:any)
  {
    return formatDate(date, 'dd/MM/yyyy hh:mm a', 'en-US')
  }

   applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}


}
