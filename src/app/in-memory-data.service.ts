import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Car } from './car';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const cars = [
      { id: 11, marca: 'Dr Nice' },
      { id: 12, marca: 'Narco' },
      { id: 13, marca: 'Bombasto' },
      { id: 14, marca: 'Celeritas' },
      { id: 15, marca: 'Magneta' },
      { id: 16, marca: 'RubberMan' },
      { id: 17, marca: 'Dynama' },
      { id: 18, marca: 'Dr IQ' },
      { id: 19, marca: 'Magma' },
      { id: 20, marca: 'Tornado' }
    ];
    return {cars};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(cars: Car[]): number {
    return cars.length > 0 ? Math.max(...cars.map(car => car.id)) + 1 : 11;
  }
}
