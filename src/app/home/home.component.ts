import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { map, Observable, startWith } from 'rxjs';
import { register } from 'swiper/element/bundle';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
// register Swiper custom elements
register();

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {



  public loader = true;
  searchControl = new FormControl();
  carOptions: string[] = [
    'Toyota Corolla', 'Honda Civic', 'Ford Mustang', 'Tesla Model 3',
    'Chevrolet Camaro', 'BMW X5', 'Audi A4', 'Mercedes-Benz C-Class'
  ];
  filteredOptions: string[] = [];
  showDropdown: boolean = false;
  

  constructor(public dialog: MatDialog)
  {

  }
  ngOnInit() {
    this.filteredOptions = [...this.carOptions]; // Initialize with all options
    setTimeout(() => {
      this.loader = false;
    }, 2000);
  }
  
  filterOptions() {
    const value = this.searchControl.value.toLowerCase();
    this.filteredOptions = this.carOptions.filter(option => 
      option.toLowerCase().includes(value)
    );
  }
  
  selectOption(option: string) {
    this.searchControl.setValue(option);
    this.showDropdown = false;
  }
  
  hideDropdownWithDelay() {
    setTimeout(() => {
      this.showDropdown = false;
    }, 200); // Small delay to allow item selection before hiding
  }


  openFilterDialog(): void {
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '100%',
      panelClass:'transparent-dialog',
      data:{dialogType:'filterCars'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Filter data:', result);
      // Apply filter logic with the selected data
    });
  }
  


}
