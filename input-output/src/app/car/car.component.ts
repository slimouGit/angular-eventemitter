import { Component} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent  {
  cars = [''];
  addCar(car: string) {
    console.log(car)
    if(car != ''){  
      this.cars.push(car)
    }
  }

}
