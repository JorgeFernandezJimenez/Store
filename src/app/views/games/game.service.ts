import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from './game';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

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

  public insert(game: Game): Observable<Game> {
    return this.http.post<Game>(this.urlApi + 'games/', game);
  }

  public delete(id: number) {
    this.http.delete(this.urlApi + 'games/' + id);
  }

}
