import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { formatDate } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { AdminDialogComponent } from '../admin-dialog/admin-dialog.component';


export interface CarData {
  id:string;
  name: string;
  uploadDate: string;
  status: string;
  price:string;
}

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css','../../../assets/css/modern.css'],
    encapsulation: ViewEncapsulation.None,
  })
export class CarListComponent {

  public carList: CarData[] = [
 
  ];
  public userType:any
  

  constructor(private httpService:HttpServiceService, private route:Router,private dialog:MatDialog)
  {
  }

  searchQuery: string = '';

public activeLoader = true;

  displayedColumns: string[] = ['id', 'name', 'uploadDate', 'price', 'status', 'actions'];
  dataSource = new MatTableDataSource<CarData>(this.carList);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;



  
   ngOnInit()
  {
    this.userType= localStorage.getItem('userType')
    if(this.userType == 'vendor')
    {
    this.carListApiVendor()
    }
    else if(this.userType == 'admin' || this.userType == 'superAdmin')
    {
      this.carListApiAdmin()
    }
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
      alert(`Viewing details for: ${element.name}`);
    }

  carListApiVendor()
  {
    let vendorId=localStorage.getItem('vendorId')
    this.httpService.getCarsVendors(vendorId).subscribe((value)=>{
      if(value.success)
      {
        this.carList=[]
        value.data.forEach((data:any)=>{
            this.carList.push({
              id:data.id,
              name:data.make+' '+data.model,
              uploadDate:formatDate(data.createTime, 'dd/MM/yyyy hh:mm a', 'en-US'),
              price:'$'+data.price,
              status:data.status
            })
        })
        this.dataSource = new MatTableDataSource<CarData>(this.carList);

      }
    },(error)=>{

    })
  }

   carListApiAdmin()
  {
    this.httpService.getCarsAdmin('rejected').subscribe((value)=>{
      if(value.success)
      {
        this.carList=[]
        value.data.forEach((data:any)=>{
            this.carList.push({
              id:data.id,
              name:data.make+' '+data.model,
              uploadDate:formatDate(data.createTime, 'dd/MM/yyyy hh:mm a', 'en-US'),
              price:'$'+data.price,
              status:data.status
            })
        })
        this.dataSource = new MatTableDataSource<CarData>(this.carList);

      }
    },(error)=>{

    })
  }
  // onSearch() {
  //   const query = this.searchQuery.toLowerCase();
  //   this.filteredRequests = this.carList.filter(
  //     (req) =>
  //       req.name.toLowerCase().includes(query) ||
  //       req.email.toLowerCase().includes(query) ||
  //       req.id.toString().includes(query)
  //   );
  // }

  viewCar(id: any=25) {
   this.route.navigate(['vendor/car-detail/'+id])
  }

  editCar(id: any=25) {
    this.route.navigate(['vendor/car-edit/'+id])

  }

  approve(element:any){
     const dialogRef =  this.dialog.open(AdminDialogComponent,{
          data:{type:'approveCar',name:element.name},
          width:'auto',
          height: 'auto',
         })
      
         dialogRef.afterClosed().subscribe(result=>{
        if(result=='yes')
          {
            this.carApprove(element.id)
          }
        })
  }

  carApprove(id:any)
  {
    this.httpService.approveCar(id).subscribe((value:any)=>{
      if(value.success)
      {
        this.carListApiVendor()
      }
    })
  }

}


