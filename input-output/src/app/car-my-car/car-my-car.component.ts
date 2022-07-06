import { Component, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'app-car-my-car',
  templateUrl: './car-my-car.component.html',
  styleUrls: ['./car-my-car.component.css']
})
export class CarMyCarComponent {


  @Input() myCar:string = '';
  @Input() myCarColor:string = '';

  @ViewChild('myLocalCarColor') definedCarColor: any;

  changeMyCarName(myCarName:HTMLInputElement){
    console.log(myCarName.value)
    this.myCar = myCarName.value;
  }

  defineMyCarColor(myCarColor:HTMLInputElement){   
    
    this.definedCarColor = myCarColor.value
    console.log(this.definedCarColor)
    this.myCarColor = this.definedCarColor
    
  }

}
