import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoList: Todo[] = [];
  title: string = '';
  myForm!: FormGroup;
  // Inject the todo Service vai : DI
  constructor(private _todoService: TodoService,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
    this.getListTodos();
  }
  createForm()
  {
 this.myForm =this.fb.group({
  Id:[],
  title:[],
  status:[]
 })
}

  createTodo() {
      
  
    let obj=new Todo();
    obj.id= new Date().getTime()
    obj.title = this.myForm.get('title')?.value
    obj.status= this.myForm.get('status')?.value 

    this._todoService.createTodo(obj).subscribe(res => {
      console.log('create to ', res);
      this.getListTodos();
    })



    
  }

  getListTodos() {
    this._todoService.getTodos().subscribe(res => {
      console.log('get todos', res);
      this.todoList = res;
    })
  }

  editTodo(todo: any) {
   
     let updateTodo = {
      id : this.myForm.get('Id')?.setValue(todo.id),
      title: this.myForm.get('title')?.setValue(todo.title),
      status: this.myForm.get('status')?.setValue(todo.status)
       
     }

    
  }
  onUpdate()
  {
    
    let todo = {
      id: this.myForm.get('Id')?.value,
      title: this.myForm.get('title')?.value,
      status: this.myForm.get('status')?.value
    }
    this._todoService.updateTodo(todo.id, todo).subscribe(res => {
      console.log('todo updated', res);
      this.getListTodos();
     })
  }
  deleteTodo(todo:any)
  {
   

     this._todoService.deleteTodo(todo.id).subscribe(res => {
      console.log('todo deleted', res);
      this.getListTodos();
     })
     this.myForm.reset();
  }
  OnSubmit() {
    console.log('fom submitted ....!', this.myForm);
   
    this.createTodo();
    this.myForm.reset();
  }
}
