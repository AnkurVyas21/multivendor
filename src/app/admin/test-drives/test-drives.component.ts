import { Component } from '@angular/core';

@Component({
  selector: 'app-test-drives',
  templateUrl: './test-drives.component.html',
  styleUrls: ['./test-drives.component.css']
})
export class TestDrivesComponent {
  searchQuery: string = '';
  displayedColumns: string[] = ['id', 'customerName', 'carModel', 'requestTime'];
  requests = [
    { id: 1, customerName: 'John Doe', carModel: 'Tesla Model 3', requestTime: '2024-12-31 10:00 AM' },
    { id: 2, customerName: 'Jane Smith', carModel: 'Ford Mustang', requestTime: '2024-12-30 2:00 PM' },
  ];
  filteredRequests = this.requests;

  onSearch() {
    const query = this.searchQuery.toLowerCase();
    this.filteredRequests = this.requests.filter(
      (req) =>
        req.customerName.toLowerCase().includes(query) ||
        req.carModel.toLowerCase().includes(query) ||
        req.id.toString().includes(query)
    );
  }
}
