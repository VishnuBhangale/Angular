import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    FormsModule
  ]
})
export class CartModule {
 
  constructor(private httpClient:HttpClient) {
    console.log('CartModule called');
    
  }
  getGifyData(): Observable<any> {
    let params = new HttpParams()
      
      .set('api_key', "zj5hbefSDuOu4yPhE43RzVaX8cqpDY0v")  //my own key
      .set('limit',100);

    return this.httpClient.get('https://api.giphy.com/v1/gifs/trending', {
      params,
    });

  }
  searchGify()
  {
    //https://api.giphy.com/v1/trending/searches?api_key=zj5hbefSDuOu4yPhE43RzVaX8cqpDY0v
    let params = new HttpParams()
      
      .set('api_key', "zj5hbefSDuOu4yPhE43RzVaX8cqpDY0v")  //my own key
      .set('limit',100);
    return this.httpClient.get('https://api.giphy.com/v1/trending/searches', {
      params,
    });
  }
 }
