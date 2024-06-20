import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-apiassignment',
  templateUrl: './apiassignment.component.html',
  styleUrls: ['./apiassignment.component.css']
})
export class ApiassignmentComponent implements OnInit {
  listData: any[] = [];
  constructor(private _service:DemoService) { }

  ngOnInit(): void {
    this._service.getData().subscribe(res=>{
console.log('result==>',res.results);

      this.listData=res.results;
    })
  }

}
