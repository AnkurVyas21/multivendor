import { formatDate } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import 'datatables.net';
import 'datatables.net-bs5';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { AdminDialogComponent } from '../admin-dialog/admin-dialog.component';
import { MatTableDataSource } from '@angular/material/table';

export interface vendorData {
  id:string;
  name: string;
  email: string;
  phone:string;
  enabled: boolean;
  date:string;
  license:string;
  actions: string;
}

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css','../../../assets/css/modern.css'],
  encapsulation: ViewEncapsulation.None,
})

export class VendorListComponent { 
  searchQuery: string = '';
  vendorList: any=[{}];
  activeLoader = false;
  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'enabled', 'date', 'license', 'actions'];

  dataSource = new MatTableDataSource<any>(this.vendorList);


  filteredvendorList = this.vendorList;

  constructor(public router: Router, private httpService: HttpServiceService,private dialog:MatDialog) {

  }

  ngOnInit() {
    this.getVendorList()
  }

  getVendorList() {
      this.activeLoader = true;
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
     this.dataSource = new MatTableDataSource<any>(this.vendorList);

      this.activeLoader = false;
    }, (error) => {
      this.activeLoader = false;
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

  applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

}
