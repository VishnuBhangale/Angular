import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  data: string = "I am from parent component";
  response : string ='';
  employee={
    "EmpId":101,
    "EmpName":"John",
    "Department":"IT",
    "Salary":10000
  }
  constructor() { }

  ngOnInit(): void {
    console.log('Data coming from child component', this.response);
    
  }
  handleData(data : any)
  {
    console.log('custom Event called', data);
  }

}
