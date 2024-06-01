import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(myForm:NgForm) {
    console.log('TDF', myForm);
    
    }

}
