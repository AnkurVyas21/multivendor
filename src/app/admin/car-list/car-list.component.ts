import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { HttpServiceService } from 'src/app/services/http-service.service';


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
    { id: '#101', name: 'Toyota Camry 2022', uploadDate: '2025/03/01', price: '$25,000', status: 'Approved' },
    { id: '#102', name: 'Honda Civic 2021', uploadDate: '2025/02/28', price: '$22,500', status: 'Approved' },
    { id: '#102', name: 'Honda Civic 2021', uploadDate: '2025/02/28', price: '$22,500', status: 'Approved' },
    { id: '#102', name: 'Honda Civic 2021', uploadDate: '2025/02/28', price: '$22,500', status: 'Approved' },
    { id: '#102', name: 'Honda Civic 2021', uploadDate: '2025/02/28', price: '$22,500', status: 'Approved' },
    { id: '#102', name: 'Honda Civic 2021', uploadDate: '2025/02/28', price: '$22,500', status: 'Approved' }
  ];
  

  constructor(private httpService:HttpServiceService, private route:Router)
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
    this.carListApi()
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

  carListApi()
  {
    this.httpService.getCars('all').subscribe((value)=>{
      if(value.success)
      {
        this.carList = value.cars;
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

}


