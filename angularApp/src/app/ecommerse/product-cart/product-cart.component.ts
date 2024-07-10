import { Component, Input, OnInit } from '@angular/core';
import { ProductCatalog } from 'src/app/models/productCatalog';
import { ProductCatlogService } from '../product-catlog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {  
  
  receivedProductList: any[] = [];

  constructor(private _service:ProductCatlogService,private _router: Router) { }

  ngOnInit(): void {
    // this._service.cartItems$.subscribe(items => {
    //   this.receivedProductList = items;
    // });
    this.getAllProduct();
  } 
  getAllProduct() {
    this._service.getProduct().subscribe(res => {
      console.log('get allProduct', res);
      this.receivedProductList = res;      
    });
  }
  addItemToCart(product: any)
  {
    let newProduct: any = {
      id: this.getMaxId() + 1,
      title: product.title,
      description: product.description,
      image: product.image,
      price:product.price
    };
    // if(this.checkProductExists(newProduct))
    //   {
    //     alert('Product Already available in Cart..');
    //       return;
    //   }
      this._service.addProduct(newProduct).subscribe(res=>{

        
      })
      this.getAllProduct();
  }
  checkProductExists(product:any):boolean {
    this.getAllProduct();
    const productExistInCart = this.receivedProductList.find(x=>x.title.trim().toLowerCase()==product.title.trim().toLowerCase()); 
    if (productExistInCart) {      
     return true;
    }
    return false;
    
  }
  getMaxId(): number {
    this._service.getProduct().subscribe(res => {
        this.receivedProductList = res;
    });
    return this.receivedProductList.length;
  }
  removeFromCart(product: any) {
    this.receivedProductList =  this.receivedProductList.filter(p => p.id !== product.id);
    this._service.removeItem(product.id).subscribe(res=>{
      
    })
  }
  backToAddProduct()
  {
    this._router.navigate(['productList']);
  }
}
