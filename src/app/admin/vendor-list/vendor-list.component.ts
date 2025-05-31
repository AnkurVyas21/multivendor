import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { AdminDialogComponent } from '../admin-dialog/admin-dialog.component';
import { error } from 'jquery';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent {
  searchQuery: string = '';
  vendorList: any = []

  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'enabled', 'date', 'license', 'actions'];


  filteredvendorList = this.vendorList;

  constructor(public router: Router, private httpService: HttpServiceService,private dialog:MatDialog) {

  }



  ngOnInit() {
    this.getVendorList()
  }

  getVendorList() {
    this.httpService.getadminVendorList().subscribe((value) => {
      if (value.length) {
        this.vendorList = []
      }
      console.log(value)
      value.forEach((element: any) => {
        this.vendorList.push({
          "id": element.id,
          "name": element.firstName + ' ' + element.lastName,
          "email": element.email,
          "phone": element.phoneNumber,
          "enabled": element.enabled,
          "date": formatDate(element.createTime, 'dd/MM/yyyy hh:mm a', 'en-US'),
          "license": element.tradeLicenseNumber
        })
      })
    }, (error) => {
      console.log(error)
    })
  }

  onSearch() {
    const query = this.searchQuery.toLowerCase();
    this.filteredvendorList = this.vendorList.length && this.vendorList.filter(
      (req: { name: string; email: string; id: { toString: () => string | string[]; }; }) =>
        req.name.toLowerCase().includes(query) ||
        req.email.toLowerCase().includes(query) ||
        req.id.toString().includes(query)
    );
  }

  approve(element: any,event:any) {
    event.stopPropagation();
   const dialogRef =  this.dialog.open(AdminDialogComponent,{
            data:{type:'approveVendor',name:element.name},
            width:'auto',
            height: 'auto',
           })
        
           dialogRef.afterClosed().subscribe(result=>{
          if(result=='yes')
            {
              this.vendorApprove(element.id)
            }
          })
  }

  decline(element: any,event:any) {
     event.stopPropagation();
   const dialogRef =  this.dialog.open(AdminDialogComponent,{
            data:{type:'declineVendor',name:element.name},
            width:'auto',
            height: 'auto',
           })
        
           dialogRef.afterClosed().subscribe(result=>{
          if(result=='yes')
            {
              this.vendorDecline(element.id)
            }
          })
  }

  navigateToDetails(displayedColumns: any) {
    console.log(displayedColumns,'displayedColumns')
    this.router.navigate(['admin/vendor-details/' + displayedColumns.id]);
  }

  vendorApprove(id:any)
  {
     this.httpService.enableVendor(id).subscribe((value:any)=>{
    },(error)=>{
      console.log('approve',error)
         this.getVendorList()

    })
  }
  vendorDecline(id:any)
  {
     this.httpService.disableVendor(id).subscribe((value:any)=>{
    },(error)=>{
      console.log('decline',error)
        this.getVendorList()

    })
  }
}
