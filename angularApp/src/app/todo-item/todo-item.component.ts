import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  todoText: string = 'Learn Directives';
  selectedColor: string = '#ffffff';
  constructor() { }

  ngOnInit(): void {
  }
  onColorSelected(newColor:any)
  {
    this.selectedColor=newColor;
    console.log('Getting color from color picker component' , this.selectedColor);
    
  }
}
