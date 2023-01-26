import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap, catchError } from 'rxjs';
import { Material } from './material';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class ValeMaterialService {


  private valeMaterialesUrl = 'api/valeMateriales';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private messageService: MessageService) { }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`MaterialService: ${message}`);
  }

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

/** GET cars from the server */
getvaleMateriales(): Observable<Material[]> {
  return this.http.get<Material[]>(this.valeMaterialesUrl)
  .pipe(
    tap(_ => this.log('fetched valeMateriales')),
    catchError(this.handleError<Material[]>('getvaleMateriales', []))
  );
}

  /*retorna del mock CARS
  getCar(id: number): Observable<Car> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`CarService: fetched car id=${id}`);
    return of(CARS.find(car => car.id === id)!);
  }

  /** GET material by id. Will 404 if id not found */
getMaterial(id: number): Observable<Material> {
  const url = `${this.valeMaterialesUrl}/${id}`;
  return this.http.get<Material>(url).pipe(
    tap(_ => this.log(`fetched material id=${id}`)),
    catchError(this.handleError<Material>(`getMaterial id=${id}`))
  );
}

  searchMateriales(term: string): Observable<Material[]> {
    if (!term.trim()) {
      // if not search term, return empty material array.
      return of([]);
    }

    return this.http.get<Material[]>(`${this.valeMaterialesUrl}/?nombre=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found materiales matching "${term}"`) :
         this.log(`no materiales matching "${term}"`)),
      catchError(this.handleError<Material[]>('searchMateriales', []))

    )



  }



/** PUT: update the material on the server */
updateMaterial(material: Material): Observable<any> {
  return this.http.put(this.valeMaterialesUrl, material, this.httpOptions).pipe(
    tap(_ => this.log(`updated material id=${material.id}`)),
    catchError(this.handleError<any>('updateMaterial'))
  );
}

/** POST: add a new material to the server */
addMaterial(material: Material): Observable<Material> {
  return this.http.post<Material>(this.valeMaterialesUrl, material, this.httpOptions).pipe(
    tap((newMaterial: Material) => this.log(`added material w/ id=${newMaterial.id}`)),
    catchError(this.handleError<Material>('addMaterial'))
  );
}

/** DELETE: delete the material from the server */
deleteMaterial(material: Material | number): Observable<Material> {
  const id = typeof material === 'number' ? material : material.id;
  const url = `${this.valeMaterialesUrl}/${id}`;

  return this.http.delete<Material>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted material id=${id}`)),
    catchError(this.handleError<Material>('deleteMaterial'))
  );
}



}
