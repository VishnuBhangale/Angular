import { Component, OnInit } from '@angular/core';
import { filter, from } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const myObs = from([1,2,3,4,5,6,7]);
    // filter out the even numbers 
    myObs.pipe(
      filter(num => num % 2 == 0)
    ).subscribe(res => {
      console.log(`Even Numbers : ${res}`);
    })
  }
}
