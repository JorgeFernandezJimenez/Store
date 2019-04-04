import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './User';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl: string = environment.apiUrl + 'users/';

  constructor(
    private http: HttpClient
  ) { }

  public getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

}
