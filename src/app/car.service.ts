import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Car } from './car';
import { CARS } from './mock-cars';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private carsUrl = 'api/cars';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private messageService: MessageService, private http: HttpClient) { }

/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}


  /*retorna del mock CARS
  getCars(): Observable<Car[]>{
        // TODO: send the message _after_ fetching the heroes
        this.messageService.add('CarService: fetched cars');

    return of(CARS);
  }

  */

/** GET cars from the server */
getCars(): Observable<Car[]> {
  return this.http.get<Car[]>(this.carsUrl)
  .pipe(
    tap(_ => this.log('fetched heroes')),
    catchError(this.handleError<Car[]>('getCars', []))
  );
}

  /*retorna del mock CARS
  getCar(id: number): Observable<Car> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`CarService: fetched car id=${id}`);
    return of(CARS.find(car => car.id === id)!);
  }

  /** GET hero by id. Will 404 if id not found */
getCar(id: number): Observable<Car> {
  const url = `${this.carsUrl}/${id}`;
  return this.http.get<Car>(url).pipe(
    tap(_ => this.log(`fetched car id=${id}`)),
    catchError(this.handleError<Car>(`getCar id=${id}`))
  );
}

/* GET heroes whose name contains search term */
searchCars(term: string): Observable<Car[]> {
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<Car[]>(`${this.carsUrl}/?marca=${term}`).pipe(
    tap(x => x.length ?
       this.log(`found cars matching "${term}"`) :
       this.log(`no cars matching "${term}"`)),
    catchError(this.handleError<Car[]>('searchCars', []))
  );
}

/** PUT: update the hero on the server */
updateCar(car: Car): Observable<any> {
  return this.http.put(this.carsUrl, car, this.httpOptions).pipe(
    tap(_ => this.log(`updated car id=${car.id}`)),
    catchError(this.handleError<any>('updateCar'))
  );
}

/** POST: add a new hero to the server */
addCar(car: Car): Observable<Car> {
  return this.http.post<Car>(this.carsUrl, car, this.httpOptions).pipe(
    tap((newCar: Car) => this.log(`added car w/ id=${newCar.id}`)),
    catchError(this.handleError<Car>('addCar'))
  );
}

/** DELETE: delete the hero from the server */
deleteCar(car: Car | number): Observable<Car> {
  const id = typeof car === 'number' ? car : car.id;
  const url = `${this.carsUrl}/${id}`;

  return this.http.delete<Car>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted car id=${id}`)),
    catchError(this.handleError<Car>('deleteCar'))
  );
}


  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`CarService: ${message}`);
  }


}
