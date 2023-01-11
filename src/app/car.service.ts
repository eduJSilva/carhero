import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Car } from './car';
import { CARS } from './mock-cars';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getCars(): Observable<Car[]>{
        // TODO: send the message _after_ fetching the heroes
        this.messageService.add('CarService: fetched cars');

    return of(CARS);
  }

  getCar(id: number): Observable<Car> {



    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`CarService: fetched car id=${id}`);
    return of(CARS.find(car => car.id === id)!);
  }




}
