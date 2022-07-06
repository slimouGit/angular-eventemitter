import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarPoolComponent } from './car-pool.component';

describe('CarPoolComponent', () => {
  let component: CarPoolComponent;
  let fixture: ComponentFixture<CarPoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarPoolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarPoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
