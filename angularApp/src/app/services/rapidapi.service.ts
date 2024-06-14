import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RapidapiService {

  url = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-newsfeed?category=generalnews&region=UK';
  // Inject the httpClient 

  constructor(private _httpClient: HttpClient) { }
  getDataFinance() : Observable<any> {
    let rapidAPIHeaders = new HttpHeaders({

      "x-rapidapi-key": "c2b090dad2mshb508a79e34cddcdp181128jsn4d12dd32b177",
      "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com" 
    })
   return this._httpClient.get(this.url, { headers: rapidAPIHeaders});

  }
}
