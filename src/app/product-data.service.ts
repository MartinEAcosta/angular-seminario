import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Product } from './product-list/Product';

const URL = 'https://6384e1793fa7acb14f039590.mockapi.io/Products';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http: HttpClient) { }


  public getAll(): Observable<Product[]>{

  return this.http.get<Product[]>(URL)
              .pipe(
                tap( (items: Product[]) => items.forEach(item => item.quantity = 0))

              );

  }
}
