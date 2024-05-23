import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

 // declare the Input property to get the data from parent comp
 @Input() getdata!: string;
 @Input() ChildEmployee! : any
 //output prop send data from child comp to parent
 @Output() sendData : EventEmitter<string> = new EventEmitter<string>();
 EmpId:number=0;
 EmpName :string='';
 Department :string='';
 Salary : number=0;
  constructor() {
   }
  ngOnInit(): void {
    console.log('getting from parent', this.getdata);
    console.log(this.ChildEmployee);
    this.EmpId=this.ChildEmployee.EmpId;
    this.EmpName=this.ChildEmployee.EmpName;
    this.Department=this.ChildEmployee.Department;
    this.Salary=this.ChildEmployee.Salary;
  }
  sendDataToParent()
  {
    const data = 'Hello Parent';
    this.sendData.emit(data);
  }
}
