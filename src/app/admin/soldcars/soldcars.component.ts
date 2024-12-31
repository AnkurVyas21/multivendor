import { Component } from '@angular/core';

interface SoldCar {
  userId: number;
  userName: string;
  carModel: string;
  soldPrice: number;
  soldTime: string;
}

@Component({
  selector: 'app-soldcars',
  templateUrl: './soldcars.component.html',
  styleUrls: ['./soldcars.component.css']
})
export class SoldcarsComponent {

  soldCars: SoldCar[] = [
    { userId: 1, userName: 'John Doe', carModel: 'Toyota Corolla', soldPrice: 15000, soldTime: '2024-12-19 14:00' },
    { userId: 2, userName: 'Jane Smith', carModel: 'Honda Civic', soldPrice: 18000, soldTime: '2024-12-20 10:30' },
    { userId: 3, userName: 'Bob Johnson', carModel: 'Tesla Model 3', soldPrice: 35000, soldTime: '2024-12-21 09:00' },
    { userId: 4, userName: 'Alice Davis', carModel: 'Ford Focus', soldPrice: 12000, soldTime: '2024-12-22 13:15' },
    { userId: 5, userName: 'Charlie Brown', carModel: 'BMW X5', soldPrice: 45000, soldTime: '2024-12-23 16:45' }
  ];

  filteredSoldCars: SoldCar[] = [...this.soldCars];
  searchQuery: string = '';

  // Filter function for search query
  onSearch() {
    this.filteredSoldCars = this.soldCars.filter(sale =>
      sale.userName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      sale.carModel.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
