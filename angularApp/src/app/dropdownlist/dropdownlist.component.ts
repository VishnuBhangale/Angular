import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdownlist',
  templateUrl: './dropdownlist.component.html',
  styleUrls: ['./dropdownlist.component.css']
})
export class DropdownlistComponent implements OnInit {

  countryCode=0;
  stateList:any = [];
 country :any=[
  {
    "name":"India",
    "code":1,
   },
   {
    "name":"US",
    "code":2,
   }
];
state :any=[
  {
    "stateId":1,
    "stateName":"Maharashtra",
    "countryCode":1,
   },
   {
    "stateId":2,
    "stateName":"Gujarat",
    "countryCode":1,
   },
   {
    "stateId":3,
    "stateName":"Delhi",
    "countryCode":1,
   },
   {
    "stateId":4,
    "stateName":"California",
    "countryCode":2,
   }, {
    "stateId":5,
    "stateName":"Pennsylvania",
    "countryCode":2,
   }
]
  constructor() {
    
   }

  ngOnInit(): void {
  }
 
getState  (countryCode: any) {
    console.log(countryCode?.target?.value);
   this.countryCode=countryCode?.target?.value;
    const newArray = this.state.filter((state:any)=>{
      return state.countryCode==this.countryCode;
  });
  this.stateList=newArray;
    }
}
