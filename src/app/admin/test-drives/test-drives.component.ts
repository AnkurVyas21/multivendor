import { Component } from '@angular/core';

interface TestDriveRequest {
  id: number;
  customerName: string;
  carModel: string;
  requestTime: string;
}


@Component({
  selector: 'app-test-drives',
  templateUrl: './test-drives.component.html',
  styleUrls: ['./test-drives.component.css']
})
export class TestDrivesComponent {

  testDriveRequests: TestDriveRequest[] = [
    { id: 1, customerName: 'John Doe', carModel: 'Tesla Model 3', requestTime: '2024-12-29 10:00' },
    { id: 2, customerName: 'Jane Smith', carModel: 'Ford Mustang', requestTime: '2024-12-29 14:30' },
    { id: 3, customerName: 'Sam Brown', carModel: 'Chevrolet Camaro', requestTime: '2024-12-30 09:00' },
    { id: 4, customerName: 'Emily Davis', carModel: 'BMW 3 Series', requestTime: '2024-12-30 11:30' },
    { id: 5, customerName: 'Michael Johnson', carModel: 'Audi A4', requestTime: '2024-12-30 13:00' },
  ];

  // Filter query model
  searchQuery: string = '';

  get filteredRequests(): TestDriveRequest[] {
    return this.testDriveRequests.filter(request => {
      return (
        request.customerName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        request.carModel.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        request.requestTime.includes(this.searchQuery)
      );
    });
  }
}
