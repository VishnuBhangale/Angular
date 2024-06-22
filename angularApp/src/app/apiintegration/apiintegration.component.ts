import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-apiintegration',
  templateUrl: './apiintegration.component.html',
  styleUrls: ['./apiintegration.component.css']
})
export class ApiintegrationComponent implements OnInit {
productData:any=[];
  constructor(private _service:DemoService) { }

  ngOnInit(): void {
    this.getProduct();
  }
  getProduct()
  {
    this._service.getProduct().subscribe(res=>{
      console.log('product details', res);
      this.productData=res;
    })
  }
}
