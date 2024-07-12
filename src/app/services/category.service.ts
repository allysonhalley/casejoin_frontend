import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from "../models/category.model";

const categoryUrl = 'http://localhost:8081/categories/';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _http: HttpClient) { }

  getAll(): Observable<Category[]> {
    return this._http.get<Category[]>(categoryUrl);
  }

  get(id: any): Observable<Category> {
    return this._http.get<Category>(`${categoryUrl}${id}`);
  }

  create(data: any): Observable<Category> {
    return this._http.post<Category>(categoryUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this._http.put(`${categoryUrl}${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this._http.delete(`${categoryUrl}${id}`);
  }

  deleteAll(): Observable<any> {
    return this._http.delete(`${categoryUrl}`);
  }

  searchCategoryByName(name: any): Observable<Category[]> {
    return this._http.get<Category[]>(`${categoryUrl}category-by-name/${name}`);
  }
}
