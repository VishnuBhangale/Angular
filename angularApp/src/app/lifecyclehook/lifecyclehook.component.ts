import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, QueryList, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { ProductCatlogService } from '../ecommerse/product-catlog.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lifecyclehook',
  templateUrl: './lifecyclehook.component.html',
  styleUrls: ['./lifecyclehook.component.css']
})
export class LifecyclehookComponent implements 
OnChanges,
OnInit,
DoCheck,
AfterContentInit ,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy

{

  @Input()
  data!: string;
  @ContentChild('projectedContent', { static: true}) content! : ElementRef;
  @ViewChild('childhook', { static: true}) viewChild! : ElementRef;
  color:string='red';
  
  items = ['Item1', 'Item2', 'Item3'];
  @ViewChildren('firstInput') inputs!: QueryList<any>;
  
  counter: any;
  num: number = 1;

  subscription: Subscription = new Subscription;

  constructor(private _giphyService: ProductCatlogService) { }
  
  ngOnChanges(changes: SimpleChanges): void {
    
    console.log('ngOnChanges called ', changes);
    
    if (changes['data']) {
      console.log('data changed', changes['data'].currentValue);
      
    }
  }
  ngOnInit(): void {
    console.log('ngOnInIt called', this.color);
    console.log('ngOnInIt called', this.data);

    this.counter = setInterval(() => {
      this.num = this.num + 1;
      console.log(this.num);
      
    }, 1000)
    // Fetch the initial data from an API .
      this.subscription= this._giphyService.getProduct().subscribe(res => {
      console.log('product from likecyclehook comp', res);
      
    })
  }
  ngDoCheck(): void{
    console.log('ngDoCheck called');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
    console.log('projected content', this.content.nativeElement.textContent);
 
    // you can perform operations on the projected content .
 
    this.content.nativeElement.style.color = 'blue';
   }
   ngAfterContentChecked(): void{
    console.log('ngAfterContentChecked called');
   }
   ngAfterViewInit(): void {
    console.log('ngAfterViewInit called', this.viewChild);
    this.viewChild.nativeElement.setAttribute('style', `color:${this.color}`);
    console.log('View initialized');
    
    if (this.inputs.first) {
     this.inputs.first.nativeElement.focus();
    }
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called', this.viewChild);
    this.viewChild.nativeElement.setAttribute('style', `color:${this.color}`);
  }
  ngOnDestroy(): void { 
   console.log('On Destroy');
   clearInterval(this.counter);
   this.subscription.unsubscribe();
  }



}


