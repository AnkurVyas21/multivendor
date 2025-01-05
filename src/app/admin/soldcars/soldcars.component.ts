import { Component } from '@angular/core';

@Component({
  selector: 'app-soldcars',
  templateUrl: './soldcars.component.html',
  styleUrls: ['./soldcars.component.css']
})
export class SoldcarsComponent {

  searchQuery: string = '';
  displayedColumns: string[] = ['userId', 'userName', 'carModel', 'soldPrice', 'soldTime'];
  soldCars = [
    { userId: 1, userName: 'John Doe', carModel: 'Tesla Model S', soldPrice: 80000, soldTime: '2024-12-30 12:30 PM' },
    { userId: 2, userName: 'Jane Smith', carModel: 'BMW X5', soldPrice: 60000, soldTime: '2024-12-29 3:00 PM' },
  ];
  filteredSoldCars = this.soldCars;

  onSearch() {
    const query = this.searchQuery.toLowerCase();
    this.filteredSoldCars = this.soldCars.filter(
      (sale) =>
        sale.userName.toLowerCase().includes(query) ||
        sale.carModel.toLowerCase().includes(query) ||
        sale.userId.toString().includes(query)
    );
  }
}
