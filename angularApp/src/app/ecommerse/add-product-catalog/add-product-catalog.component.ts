import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProductCatalog } from 'src/app/models/productCatalog';
import { ProductCatlogService } from '../product-catlog.service';

@Component({
  selector: 'app-add-product-catalog',
  templateUrl: './add-product-catalog.component.html',
  styleUrls: ['./add-product-catalog.component.css']
})
export class AddProductCatalogComponent implements OnInit {
  myForm!: FormGroup;
  productList: ProductCatalog[] = [];
  isProductInCart:boolean=false;
  constructor(private _service: ProductCatlogService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
    this.getAllProduct();
  }
  createForm() {
    this.myForm = this.fb.group({
      Id: [],
      title: [],
      description: []
    });
  }
  addProduct() {
    let obj = new ProductCatalog();
    var maxId = this.getMaxId() + 1;
    obj.id = maxId;
    obj.title = this.myForm.get('title')?.value;
    obj.description = this.myForm.get('description')?.value;
   
      // if(this.checkProductExists(obj))
      //   {
      //     alert('Product Already available in Cart..');
      //       return;
      //   }

    this._service.addProduct(obj).subscribe(res => {
      console.log('add product ==> ', res);
    });      
    this.productList.push(obj)
    //this._service.addToCart(obj);
    this.getAllProduct();
    this.resetForm();
    alert('Product Added Successfully!!')  
  }
  resetForm()
  {
    this.myForm.reset();
  }
  OnSubmit() {
    console.log('fom submitted ....!', this.myForm);

    this.addProduct();
  }
  getMaxId(): number {
    this._service.getProduct().subscribe(res => {
        this.productList = res;
    });
    return this.productList.length;
  }
  getAllProduct() {
    this._service.getProduct().subscribe(res => {
      console.log('get allProduct', res);
      this.productList = res;      
    });
   
  }
  cartProductList = [];

  checkProductExists(product:ProductCatalog):boolean {
    this.getAllProduct();
    const productExistInCart = this.productList.find(x=>x.title.trim().toLowerCase()==product.title.trim().toLowerCase()); 
    if (productExistInCart) {      
     return true;
    }
    return false;
    
  }
   removeProduct(product:ProductCatalog) {
    this.productList = this.productList.filter(t=> t.title !== product.title);
   }


}
