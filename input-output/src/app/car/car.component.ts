import { Component, Output, EventEmitter, Input} from '@angular/core';
import { Car } from '../car';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent  {

  
  @Output() carEvent = new EventEmitter<Car>();

  car:Car = new Car('','');

  onAddCar(){
    if(this.car.model != '' && this.car.color != ''){
      this.carEvent.emit(new Car(this.car.model,this.car.color))
    }
  }
 

}
