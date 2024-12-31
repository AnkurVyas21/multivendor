import { Component } from '@angular/core';

interface CarSale {
  userId: number;
  userName: string;
  carModel: string;
  carAddedTime: string;
}

@Component({
  selector: 'app-addcars',
  templateUrl: './addcars.component.html',
  styleUrls: ['./addcars.component.css']
})
export class AddcarsComponent {

  carSales: CarSale[] = [
    { userId: 1, userName: 'John Doe', carModel: 'Toyota Corolla', carAddedTime: '2024-12-20 14:30' },
    { userId: 2, userName: 'Jane Smith', carModel: 'Honda Civic', carAddedTime: '2024-12-21 10:00' },
    { userId: 3, userName: 'Bob Johnson', carModel: 'Tesla Model 3', carAddedTime: '2024-12-22 09:15' },
    { userId: 4, userName: 'Alice Davis', carModel: 'Ford Focus', carAddedTime: '2024-12-23 12:45' },
    { userId: 5, userName: 'Charlie Brown', carModel: 'BMW X5', carAddedTime: '2024-12-24 16:00' }
  ];

  filteredCarSales: CarSale[] = [...this.carSales];
  searchQuery: string = '';

  // Filter function for search query
  onSearch() {
    this.filteredCarSales = this.carSales.filter(sale =>
      sale.userName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      sale.carModel.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
