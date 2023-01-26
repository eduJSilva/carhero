import { Component, OnInit } from '@angular/core';

import { Car } from '../car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars!: Car[];

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.getCars();
  }

  getCars(): void {
    this.carService.getCars()
    .subscribe(cars => this.cars = cars);
  }

  add(marca: string): void {
    marca = marca.trim();
    if (!marca) { return; }
    this.carService.addCar({ marca } as Car)
      .subscribe(car => {
        this.cars.push(car);
      });
  }

  delete(car: Car): void {
    this.cars = this.cars.filter(h => h !== car);
    this.carService.deleteCar(car).subscribe();
  }

}
