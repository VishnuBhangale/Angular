import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
//  apiUrl:'http://localhost:3000/todos'

  private apiUrl : string = environment.apiUrl;
  // Inject the HttpClient
  constructor(private _httpClient: HttpClient) { }

// Create - Post 
createTodo(data: any) : Observable<Todo[]>{
  let API_URL = `${this.apiUrl}/todos`;
 return this._httpClient.post<Todo[]>(API_URL, data);
 }


// Read - Get

getTodos() : Observable<Todo[]> {
  let API_URL = `${this.apiUrl}/todos`;
 return this._httpClient.get<Todo[]>(API_URL);
 }

 // Update 

 updateTodo(id: any, data: any) : Observable<Todo[]> {

  let API_URL = `${this.apiUrl}/todos/${id}`;
  return this._httpClient.put<Todo[]>(API_URL, data);
 }
//delete
deleteTodo(id: any) : Observable<Todo[]>{
  let API_URL = `${this.apiUrl}/todos/${id}`;
  return this._httpClient.delete<Todo[]>(API_URL);
 }
 
}