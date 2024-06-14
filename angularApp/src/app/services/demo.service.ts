import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  //Inject the http client service
  constructor(private httpClient:HttpClient) { }
  getPosts()
  {
    return this.httpClient.get("https://jsonplaceholder.typicode.com/posts");
  }
}
