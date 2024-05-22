import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaydatabinding01',
  templateUrl: './twowaydatabinding01.component.html',
  styleUrls: ['./twowaydatabinding01.component.css']
})
export class Twowaydatabinding01Component implements OnInit {
name:string="Vishnu";
isDisabled =false;
  constructor() { 
    this.isDisabled = this.name.length > 0 ? false:true;
  }

  ngOnInit(): void {
  }
  onClick()
  {
    this.name= '';
    this.isDisabled=this.name.length > 0 ? false:true;
  }
  onInputChange(value : any)
  {
    this.isDisabled=value.length > 0 ? false:true;
  }
}
