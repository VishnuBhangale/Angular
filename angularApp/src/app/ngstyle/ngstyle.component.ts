import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {
//property

isClicked=false;
buttonStyle={
  'color':this.isClicked ? 'red':'green'
}
colorValue = 'pink';
  constructor() { }

  ngOnInit(): void {
  }
  onButtonClick() {
    this.isClicked=!this.isClicked;
    this.buttonStyle={
      'color':this.isClicked ? 'red':'green'
     }
    }
}
