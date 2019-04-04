import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './category';
import { environment } from 'src/environments/environment';

@Injectable()
export class CategoryService {

  private urlApi: string = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  public getAll(): Observable<Category[]> {
    let url = this.urlApi + 'categories/';
    return this.http.get<Category[]>(url);
  }

  public getOne(id: number): Observable<Category> {
    let url = this.urlApi +'categories/' + id;
    return this.http.get<Category>(url);
  }

}
