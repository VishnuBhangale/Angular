import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductCatalog } from '../models/productCatalog';

@Injectable({
  providedIn: 'root'
})
export class ProductCatlogService {
  apiUrl:string='http://localhost:3000';
  // private cartItemsSubject: BehaviorSubject<ProductCatalog[]> = new BehaviorSubject<ProductCatalog[]>([]);
  // public cartItems$: Observable<ProductCatalog[]> = this.cartItemsSubject.asObservable();
  
  constructor(private _httpClient:HttpClient) { }
 
  addProduct(data:any): Observable<any[]>{
    let API_URL = `${this.apiUrl}/products`;
   return this._httpClient.post<any[]>(API_URL, data);
   }
   getProduct() : Observable<any[]> {
    let API_URL = `${this.apiUrl}/products`;
   return this._httpClient.get<any[]>(API_URL);
   }
  // addToCart(product: ProductCatalog) {
  //   let cartItems = this.cartItemsSubject.getValue();
  //   cartItems.push(product);
  //   this.cartItemsSubject.next(cartItems);
  // }
  removeItem(id: any) : Observable<any[]>{
    let API_URL = `${this.apiUrl}/products/${id}`;
    return this._httpClient.delete<any[]>(API_URL);
   }
   
}
