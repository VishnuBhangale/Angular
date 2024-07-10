import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';
import { ProductCatalog } from '../models/productCatalog';
import { ProductCatlogService } from '../ecommerse/product-catlog.service';

@Component({
  selector: 'app-apiintegration',
  templateUrl: './apiintegration.component.html',
  styleUrls: ['./apiintegration.component.css']
})
export class ApiintegrationComponent implements OnInit {
productDataList:any=[];
itemCartData:any=[];
productList:any=[];
  constructor(private _service:DemoService,private _productService: ProductCatlogService) { }

  ngOnInit(): void {
   
    this.getProduct();
    this.getAllProduct(); //to show count in cart
  }
  getProduct()
  {
    this._service.getProduct().subscribe(res=>{
      console.log('product details', res);
      this.productDataList=res;
    })
  }
      addProduct(product:any)
      {
        let newProduct: any = {
          id: new Date().getTime(),
          title: product.title,
          description: product.description,
          image: product.image,
          price:product.price
        };
        this._productService.addProduct(newProduct).subscribe(res => {
          console.log('add product ==> ', res);
          this.productList = res;
          
          this.getAllProduct();
        },
        (error) => {
          console.error('Error adding product:', error);
          
        }
      
      ); 

      }
      getMaxId(): number {
        this._service.getProduct().subscribe(res => {
            this.productList = res;
        });
        return this.productList .length;
      }
      getAllProduct() {
        this.productList=[];
        this._productService.getProduct().subscribe(res => {
          console.log('get allProduct', res);
          this.productList=res;      
        },
        (error) => {
          console.error('Error Fetching product:', error);
          
        }
      );
      }
}
