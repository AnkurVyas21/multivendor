import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-vendor-details',
  templateUrl: './vendor-details.component.html',
  styleUrls: ['./vendor-details.component.css']
})
export class VendorDetailsComponent implements OnInit {
  vendor: any;

  constructor(private route: ActivatedRoute, private router: Router, private httpService:HttpServiceService) {}

  ngOnInit(): void {
    const vendorId = this.route.snapshot.paramMap.get('id');
    console.log(vendorId,'adfladsj')
    if (vendorId) {
      this.getVendorDetails(vendorId);
    }

   
  }

  getVendorDetails(id: string) {
    // 🔹 Dummy Data for testing

    this.httpService.getVendorDetails(id).subscribe((value)=>{
      console.log('success')
    },(error)=>{
      console.log(error)
    }
    )
    const dummyVendors = [
      { id: '25', name: 'John Doe', email: 'john@example.com', status: 'Pending', totalListings: 15, commissionsPaid: 5000 },
    ];

    this.vendor = dummyVendors.find(v => v.id === id);
  }

  approveVendor() {
    this.vendor.status = 'Approved';
  }

  suspendVendor() {
    this.vendor.status = 'Suspended';
  }

  removeVendor() {
    if (confirm('Are you sure you want to remove this vendor?')) {
      this.vendor = null; // Simulate removal
      alert('Vendor removed successfully!');
      this.router.navigate(['/vendors']); // Redirect after deletion
    }
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Approved':
        return 'bg-success text-white';
      case 'Suspended':
        return 'bg-warning text-dark';
      case 'Pending':
        return 'bg-danger text-white';
      default:
        return 'bg-secondary text-white';
    }
  }

  updateCommission() {
    alert(`Commission updated to ₹${this.vendor.commissionsPaid}`);
  }
}
