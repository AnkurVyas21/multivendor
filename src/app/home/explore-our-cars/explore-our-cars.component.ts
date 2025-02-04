import { Component } from '@angular/core';

@Component({
  selector: 'app-explore-our-cars',
  templateUrl: './explore-our-cars.component.html',
  styleUrls: ['./explore-our-cars.component.css']
})
export class ExploreOurCarsComponent {

  cars = [
    { name: 'Sedan', image: 'assets/images/partner/c12.png' },
    { name: 'Campers', image: 'assets/images/partner/c10.png' },
    { name: 'Cabriolet', image: 'assets/images/partner/c8.png' },
    { name: 'Pickup', image: 'assets/images/partner/c11.png' },
    { name: 'Supercar', image: 'assets/images/partner/c7.png' },
    { name: 'Minivans', image: 'assets/images/partner/c9.png' }
  ];
}
