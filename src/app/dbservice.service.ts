import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ReturnStatement } from '@angular/compiler';
import {Fact} from './Fact';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DbserviceService {
  public Url = 'http://localhost:8080/middleware/api/fact';
  constructor(public http: HttpClient) { }

  addFact (fact:Fact): Observable<Fact> {
    console.log("service"+fact.factId);
   return this.http.post<Fact>(this.Url, fact, httpOptions).pipe(
   
     catchError(this.handleError<Fact>('addFact'))
   );
 }

 getAllFact():Observable<Fact>{
   return this.http.get<Fact>(this.Url).pipe(
     catchError(this.handleError<Fact>('getAllFact'))
   );
 }

 updateFact(fact:Fact): Observable<Fact> {
    console.log("service"+fact.factId);
  return this.http.put<Fact>(this.Url,fact, httpOptions).pipe(
   catchError(this.handleError<Fact>('updateFact'))
  );
}

deleteFact(fact:Fact):Observable<Fact>
  {
    console.log("service delete for "+fact.factId);
    return this.http.delete<Fact>(this.Url).pipe(
      catchError(this.handleError<Fact>('deleteFact'))
    );
}

getFactID(fid : number) : Observable<Fact>{
  console.log(fid)
  const url = `${this.Url}/${fid}`;
  return this.http.get<Fact>(url);
}

 
 private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

}
