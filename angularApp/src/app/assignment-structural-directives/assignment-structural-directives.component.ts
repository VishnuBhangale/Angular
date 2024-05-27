import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-structural-directives',
  templateUrl: './assignment-structural-directives.component.html',
  styleUrls: ['./assignment-structural-directives.component.css']
})
export class AssignmentStructuralDirectivesComponent implements OnInit {

checkBoxValue:boolean=false;
grade:string = "A";
courses: any[] = [
  { name: 'Angular', Fees: 5000},
  { name: 'DotNet', Fees: 3000},
  { name: 'Java', Fees: 5000},

]


  constructor() {this.checkBoxValue=false; }

  ngOnInit(): void {
  }
  OnCheck() {
    
    this.checkBoxValue=this.checkBoxValue?true:false;
    }
}
