import { formatDate } from '@angular/common';
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
  requests = []

displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'enable', 'createdAt'];


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

}
