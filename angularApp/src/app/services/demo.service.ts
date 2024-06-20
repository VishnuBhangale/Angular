import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DemoService {
  //Inject the http client service
  constructor(private httpClient: HttpClient) {}
  getPosts() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
  }
  getWikiSearch(search: any): Observable<any> {
    let params = new HttpParams()
      .set('action', 'query')
      .set('format', 'json')
      .set('list', 'search')
      .set('utf8', '1')
      .set('origin', '*')
      .set('srsearch', search);

    return this.httpClient.get('https://en.wikipedia.org/w/api.php', {
      params,
    });
  }
  getCustomData() : Observable<string[]> {
    return of(['Angular', 'Javascript', '.Net']).pipe(
      delay(5000)
    )
   }
   getData(): Observable<any> {
    let params = new HttpParams()
      
      .set('results', 50);

    return this.httpClient.get('https://randomuser.me/api', {
      params,
    });
  }
}
