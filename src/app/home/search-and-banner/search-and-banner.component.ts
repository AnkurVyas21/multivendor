import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from 'src/app/dialog-box/dialog-box.component';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-search-and-banner',
  templateUrl: './search-and-banner.component.html',
  styleUrls: ['./search-and-banner.component.css']
})
export class SearchAndBannerComponent {
 searchControl = new FormControl();
  carOptions: string[] = [
    'Toyota Corolla', 'Honda Civic', 'Ford Mustang', 'Tesla Model 3',
    'Chevrolet Camaro', 'BMW X5', 'Audi A4', 'Mercedes-Benz C-Class'
  ];
  filteredOptions: string[] = [];
  showDropdown: boolean = false;
   constructor(public dialog: MatDialog, private httpService:HttpServiceService)
    {
  
    }

    ngOnInit() {
      this.filteredOptions = [...this.carOptions]; // Initialize with all options
  
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
