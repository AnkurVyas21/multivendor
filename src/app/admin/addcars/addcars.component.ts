import { Router } from '@angular/router';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AdminDialogComponent } from '../admin-dialog/admin-dialog.component';

interface Car {
  title: string;
  make: string;
  model: string;
  type: string;
  year: string;
  condition: string;
  stockNumber: string;
  vinNumber: string;
  description: string;
  priceLabel: boolean;
  regularPrice: number;
  salePrice: number;
  requestPrice: number;
}
@Component({
  selector: 'app-addcars',
  templateUrl: './addcars.component.html',
  styleUrls: ['./addcars.component.css']
})
export class AddcarsComponent {

  searchQuery: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator ;
  displayedColumns: string[] = [
    'title', 'make', 'model', 'type', 'year', 'condition', 'stockNumber', 'vinNumber', 'description', 'priceLabel', 'regularPrice', 'salePrice', 'requestPrice'
  ];
  dataSource = new MatTableDataSource<Car>([
    {
      title: 'edax',
      make: 'Bentley',
      model: '718 Boxster T',
      type: 'Crossover',
      year: '2020',
      condition: 'New',
      stockNumber: '2514251',
      vinNumber: '52415241',
      description: 'Luxury sports car',
      priceLabel: true,
      regularPrice: 33,
      salePrice: 23,
      requestPrice: 23
    },
    {
      title: 'speedster',
      make: 'Porsche',
      model: '911 Carrera',
      type: 'Convertible',
      year: '2021',
      condition: 'New',
      stockNumber: '987654',
      vinNumber: '654987321',
      description: 'High-performance coupe',
      priceLabel: true,
      regularPrice: 50,
      salePrice: 45,
      requestPrice: 44
    },
    {
      title: 'mustang',
      make: 'Ford',
      model: 'GT',
      type: 'Sports',
      year: '2019',
      condition: 'Used',
      stockNumber: '753951',
      vinNumber: '852741963',
      description: 'Classic muscle car',
      priceLabel: false,
      regularPrice: 40,
      salePrice: 35,
      requestPrice: 34
    },
    {
      title: 'roadster',
      make: 'Tesla',
      model: 'Roadster',
      type: 'Electric',
      year: '2022',
      condition: 'New',
      stockNumber: '112233',
      vinNumber: '9988776655',
      description: 'Fast electric sports car',
      priceLabel: true,
      regularPrice: 200,
      salePrice: 180,
      requestPrice: 175
    }
  ]);

  constructor(private dialog:MatDialog)
  {

  }



  addCar() {

  //  const dialogRef =  this.dialog.open(AdminDialogComponent,{
  //   data:{type:'addCar'},
  //   width: '500px',
  //   height: '800px',
  //   disableClose: false,
  //   hasBackdrop: true,
  //   autoFocus: true,
  //  })

  //  dialogRef.afterClosed().subscribe(result=>{
  //   console.log('addCar', result)
  //  })
   
  }

  ngOnInit() {
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onRowClick(rowData:any)
  {
    const dialogRef =  this.dialog.open(AdminDialogComponent,{
      data:{type:'viewCar'},
      width:'100%',
      height: '550px',
     })
  
     dialogRef.afterClosed().subscribe(result=>{
      console.log('viewCar', result)
     })
  }

}
