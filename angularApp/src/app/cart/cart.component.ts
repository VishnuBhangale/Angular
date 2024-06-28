import { Component, OnInit } from '@angular/core';
import { CartModule } from './cart.module';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  carts : any[] = [];
  filteredCarts:any=[];
  constructor(private _serviceCart:CartModule) { }
  searchText:any='';
  ngOnInit(): void {
    this.getGiphy();
  }
    getGiphy()
    {
      this._serviceCart.getGifyData().subscribe(res=>{
        console.log('result==>',res);
        this.carts=res.data;
      })
    }
    
    onBlur()
    {
      if (this.searchText.trim() === '') {       
        this.filteredCarts = this.carts;
      } else {        
        this.filteredCarts = this.carts.filter(g =>
          g.title.toLowerCase().includes(this.searchText.toLowerCase())
        );
      }
  }
}
