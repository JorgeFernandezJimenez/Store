import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Game } from './game';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

const header = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};
@Injectable()
export class GameService {

  private urlApi: string;

  constructor(
    private http: HttpClient
  ) {
    this.urlApi = environment.apiUrl;
  }

  public getAll(): Observable<Game[]> {
    return this.http.get<Game[]>(this.urlApi + 'games/');
  }

  public getOne(id: number): Observable<Game> {
    return this.http.get<Game>(this.urlApi + 'games/' + id);
  }

  public getAllByCategory(category: number): Observable<Game[]> {
    return this.http.get<Game[]>(this.urlApi + 'games/?category=' + category)
  }

  public getAllByName(name: string): Observable<Game[]> {
    return this.http.get<Game[]>(this.urlApi + 'games/?name=' + name);
  }

  public insert(game: Game): Observable<Game> {
    return this.http.post<Game>(this.urlApi + 'games/', game, header);
  }

  public delete(id: number): Observable<Game> {
    return this.http.delete<Game>(this.urlApi + 'games/' + id, header);
  }

  public update(game: Game): Observable<Game> {
    return this.http.put<Game>(this.urlApi + 'games/', game, header).pipe(
      tap(_ => console.log('usuario actualizado')),
      catchError(this.handleError<Game>('updateGame'))
    );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
