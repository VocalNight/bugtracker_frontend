import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Bug } from './bug.model';

@Injectable({
  providedIn: 'root'
})
export class BugService {

  private bugsUrl = 'api/bugs';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  getBugs(): Observable<Bug[]> {
    return this.http.get<Bug[]>(this.bugsUrl);
  }

  addBug(bug: Bug): Observable<Bug> {
    return this.http.post<Bug>(this.bugsUrl, bug, this.httpOptions).pipe(
      catchError(this.handleError<Bug>('addBug'))
    );
  }


    /**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    //this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}


}
