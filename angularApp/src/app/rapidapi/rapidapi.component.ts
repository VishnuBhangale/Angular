import { Component, OnInit } from '@angular/core';
import { RapidapiService } from '../services/rapidapi.service';

@Component({
  selector: 'app-rapidapi',
  templateUrl: './rapidapi.component.html',
  styleUrls: ['./rapidapi.component.css'],
})
export class RapidapiComponent implements OnInit {
  constructor(private _rapidapiService: RapidapiService) {}
  myDataArray: any;
  ngOnInit(): void {
    // this._rapidapiService.getDataFinance().subscribe((res) => {
    //   console.log('Response Data', res);
    //   console.log('Response Data split', res.items.result);

    //   this.myDataArray = res.items.result;
    // });
    this._rapidapiService.getStockHistory().subscribe((res) => {
      console.log('res from rapid api StockHistory', res);
    });

    this._rapidapiService.getMarketNews().subscribe((res) => {
      console.log('res from rapid api MarketNews', res);
    });

    this._rapidapiService.getinsiderTraders().subscribe((res) => {
      console.log('res from rapid api Traders', res);
    });
  }
}
