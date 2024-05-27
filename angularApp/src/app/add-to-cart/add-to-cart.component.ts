import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {
// array of object
cartItems: any[] = [
  { name: 'Apples', quantity: 2},
  { name: 'Bananas', quantity: 1},
  { name: 'Milk', quantity: 1},

]
  constructor() { }

  ngOnInit(): void {
  }

}
