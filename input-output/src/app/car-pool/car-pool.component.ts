import { Component } from '@angular/core';
import { Car } from '../car';

@Component({
  selector: 'app-car-pool',
  templateUrl: './car-pool.component.html',
  styleUrls: ['./car-pool.component.css']
})
export class CarPoolComponent {
    
   cars:Car[] = [];
   myCar = 'SMART';
   myCarColor = 'silver'

   addCar(car: Car) {
      this.cars.push(car)    
  }


}
