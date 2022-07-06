import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarMyCarComponent } from './car-my-car.component';

describe('CarMyCarComponent', () => {
  let component: CarMyCarComponent;
  let fixture: ComponentFixture<CarMyCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarMyCarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarMyCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
