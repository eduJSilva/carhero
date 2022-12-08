import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { CARS } from '../mock-cars';

@Component({
  selector: 'app-form-busqueda',
  templateUrl: './form-busqueda.component.html',
  styleUrls: ['./form-busqueda.component.css']
})
export class FormBusquedaComponent implements OnInit {

  titulo = 'BUSQUEDA DE AUTOS'
  cars = CARS;

  marcaBuscar: string='';
  selectedCar!: Car;


  constructor() {


  }

  ngOnInit(): void {
  }

  onSelect(car: Car): void {
    this.selectedCar = car;
  }


}


