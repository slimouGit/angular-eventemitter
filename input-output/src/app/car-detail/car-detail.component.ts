import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent  {

  @Output() carEvent = new EventEmitter<string>();

  

  onAddCar(value:string){
    this.carEvent.emit(value)
  }
}
