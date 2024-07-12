import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {first, Observable} from "rxjs";
import {Product} from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly API = "http://localhost:8081/products/";

  constructor(private _http: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this._http.get<Product[]>(this.API);
  }

  get(id: string): Observable<Product> {
    return this._http.get<Product>(`${this.API}${id}`);
  }

  create(data: Product): Observable<Product> {
    return this._http.post<Product>(this.API, data);
  }

  update(id: any, data: any): Observable<any> {
    return this._http.put(`${this.API}${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this._http.delete(`${this.API}${id}`);
  }

  deleteAll(): Observable<any> {
    return this._http.delete(`${this.API}`);
  }

  searchProductByName(name: string): Observable<Product[]> {
    return this._http.get<Product[]>(`${this.API}product-by-name/${name}`);
  }
}
