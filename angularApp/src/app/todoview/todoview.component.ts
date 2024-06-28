import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todoview',
  templateUrl: './todoview.component.html',
  styleUrls: ['./todoview.component.css']
})
export class TodoviewComponent implements OnInit {

 // inject the activated Route service 

 todos: Todo[] = [] ;
 constructor(private _route: ActivatedRoute, private _todoService: TodoService) { }

 ngOnInit(): void {
   console.log('ActivatedRoute', this._route);
   let id = this._route.snapshot.params['id'];
   console.log('id', id);

   this._todoService.getTodoById(id).subscribe(res => {
     console.log('get by id', res);
     this.todos.push(res);
   })
   
 }
}
