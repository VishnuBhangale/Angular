import { Component } from '@angular/core';
import { DemoService } from './services/demo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularApp';
  //Inject the demo service
  constructor(private _demoService:DemoService) {
  this._demoService.getPosts().subscribe(res=>{
    console.log('from json server Posts data', res)
    
  });

const myObservable = new Observable(observer => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();

    });

    myObservable.subscribe(res=> {
      console.log('myObservable', res);
      
    })
  }
}
