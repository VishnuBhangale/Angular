import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-biodata',
  templateUrl: './biodata.component.html',
  styleUrls: ['./biodata.component.css']
})
export class BiodataComponent implements OnInit {

  Religion :any=[
    {
      "name":"Hindu",
     },
     {
      "name":"Muslim"
     }
     ,
     {
      "name":"Sikh"
     }
  ];
  Cast :any=[
    {
      "name":"Maratha",
     },
     {
      "name":"Kunbi"
     }
     ,
     {
      "name":"Leva Patil"
     }
  ];
  BloodGroup :any=[
    {
      "name":"A+ve",
     },
     {
      "name":"A-ve"
     }
     ,
     {
      "name":"B+ve"
     }     
     ,
     {
      "name":"B-ve"
     }
     ,
     {
      "name":"O+ve"
     }
     ,
     {
      "name":"O-ve"
     },
     {
      "name":"AB"
     }
  ];
  src=".\assets\Developer.png";
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(biodataForm:NgForm) {    
    console.log('BioData Form', biodataForm.value);
    }
}
