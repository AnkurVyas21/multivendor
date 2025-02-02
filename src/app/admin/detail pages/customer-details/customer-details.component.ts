import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  customer: any;

  ngOnInit(): void {
    this.loadCustomerDetails();
  }

  loadCustomerDetails() {
    // Dummy customer data for ID 25
    this.customer = {
      id: '25',
      name: 'Amit Sharma',
      email: 'amit@example.com',
      status: 'Active',
      inquiries: [
        { id: 1, car: 'Toyota Camry', date: '2024-01-10' },
        { id: 2, car: 'Honda Civic', date: '2024-02-15' }
      ],
      purchasedCars: ['Ford Mustang', 'BMW X5']
    };
  }

  getStatusClass(status: string): string {
    return status === 'Active' ? 'bg-success text-white' : 'bg-warning text-dark';
  }

  suspendUser() {
    this.customer.status = 'Suspended';
  }

  removeUser() {
    if (confirm('Are you sure you want to remove this customer?')) {
      this.customer = null; // Simulating removal
      alert('Customer removed successfully!');
    }
  }
}