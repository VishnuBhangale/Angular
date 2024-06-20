import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pipeconvert',
  templateUrl: './pipeconvert.component.html',
  styleUrls: ['./pipeconvert.component.css']
})
export class PipeconvertComponent implements OnInit {
  currentDate: Date = new Date();
  name: string = 'Angular Developer';
  amount: number = 1777.57;
  percentage: number = 0.85;
  data$!: Observable<string[]>;
  constructor(private _demoService: DemoService) { }

  ngOnInit(): void {
    this.data$ = this._demoService.getCustomData();
  }

}
