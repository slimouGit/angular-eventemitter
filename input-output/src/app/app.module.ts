import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { CarPoolComponent } from './car-pool/car-pool.component';
import { CarMyCarComponent } from './car-my-car/car-my-car.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CarPoolComponent,
    CarMyCarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
