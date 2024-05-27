import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {
//arraof string
daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// to get the current date then calls getDay method. 
// Sunday 0 , Monday 1 
todayIndex = new Date().getDay();

day: string = this.daysOfWeek[this.todayIndex];
  constructor() { }
  ngOnInit(): void {
  }

}
