import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/layouts/aside/User';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.apiUrl + 'users/';

  constructor(
    private http: HttpClient
  ) { }

  public update(user: User) {
    this.http.put<User>(this.apiUrl, user);
  }

}
