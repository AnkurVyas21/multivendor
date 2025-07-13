import { ChangeDetectorRef, Component } from '@angular/core';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { HttpServiceService } from '../services/http-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { environment } from '../enviornment/environment';

@Component({
  selector: 'app-search-car-list',
  templateUrl: './search-car-list.component.html',
  styleUrls: ['./search-car-list.component.css']
})
export class SearchCarListComponent {

    cars = []
 baseUrl = environment.apiUrl
   hoveredIndexes: { [carId: number]: number | null } = {};
  title = 'all cars';


    searchResult:any =[]

    searchControl = new FormControl();
      carOptions: string[] = [
        'Toyota Corolla', 'Honda Civic', 'Ford Mustang', 'Tesla Model 3',
        'Chevrolet Camaro', 'BMW X5', 'Audi A4', 'Mercedes-Benz C-Class'
      ];
      filteredOptions: any = [];
      showDropdown: boolean = false;
       constructor(public dialog: MatDialog, private httpService:HttpServiceService, private Route:Router, private ActivatedRoute:ActivatedRoute, private cd: ChangeDetectorRef)
        {
      
        }
    
        ngOnInit() {
          // Initialize with all options
            console.log('search component works')
          this.ActivatedRoute.queryParamMap.subscribe((value:any)=>{
            console.log(Object.keys(value.params))
            let paramKeys = Object.keys(value.params)
            if(Object.keys(value.params)[0]=='title')
           { this.searchControl.setValue(value.params.title)
            this.title = value.params.title
            this.searchCars(value.params.title)}
            else if (Object.keys(value.params)[0]=='type')
            {
              this.title = value.params.type+' cars'
              this.searchControl.setValue(value.params.type)
              this.searchCarsType(value.params.type)
            }
             else if (paramKeys.includes('brand')|| paramKeys.includes('color')|| paramKeys.includes('engineSize')|| paramKeys.includes('location')|| paramKeys.includes('model')|| paramKeys.includes('transmission')|| paramKeys.includes('used')|| paramKeys.includes('year'))
            {
              this.title = paramKeys.join(',')
              this.searchControl.setValue(value.params.make)
              this.filterCars(value.params)
            }
              else if (Object.keys(value.params)[0]=='make')
            {
              this.title = value.params.make+' cars'
              this.searchControl.setValue(value.params.make)
              this.searchCarsMake(value.params.make)
            }
            else {
              this.title = 'all cars'
              this.searchAllCars()
            }
          })
        }


        setHoveredImage(carId: number, index: number) {
  this.hoveredIndexes[carId] = index;
}

resetHoveredImage(carId: number) {
  this.hoveredIndexes[carId] = null;
}

        searchCars(title:string)
        {
          this.httpService.searchCarHome(title).subscribe((value:any)=>{
             this.searchResult =value?.data;
          })
             this.cd.detectChanges()
             this.cd.markForCheck()
        }

        searchCarsType(type:string)
        {
          this.httpService.searchCarType(type).subscribe((value:any)=>{
             this.searchResult =value?.data;
          })
             this.cd.detectChanges()
             this.cd.markForCheck()
        }

        searchCarsMake(make:string){
          this.httpService.searchCarMake(make).subscribe((value:any)=>{
             this.searchResult =value?.data;
          })
             this.cd.detectChanges()
             this.cd.markForCheck()
        }

        searchAllCars()
        {
          this.httpService.getAllCars().subscribe((value:any)=>{
             this.searchResult =value?.data;
          })
             this.cd.detectChanges()
             this.cd.markForCheck()
        }
    
        filterOptions() {
          const keyword = this.searchControl.value.toLowerCase();
          this.httpService.searchCarHome(keyword).subscribe((value:any)=>{
             this.searchResult =value.data;
          })
         
        }
        
        selectOption(option: string) {
          this.searchControl.setValue(option);
          this.showDropdown = false;
        }

        openDetailPage(id:any)
        {
          this.Route.navigate(['/detail/'+id])
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
    
          searchText()
            {
              this.Route.navigate(['/search'],{queryParams:{title:this.searchControl.value}})
            }

            filterCars(value:any)
            {
             this.httpService.filterCars(value).subscribe((value:any)=>{
             this.searchResult =value?.data;
          })
             this.cd.detectChanges()
             this.cd.markForCheck()
            }
    }
    
  

