import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-car-my-car',
  templateUrl: './car-my-car.component.html',
  styleUrls: ['./car-my-car.component.css']
})
export class CarMyCarComponent {

  @Input() myCar:string = '';

  changeMyCarName(myCarName:HTMLInputElement){
    console.log(myCarName.value)
    this.myCar = myCarName.value;
  }

}
