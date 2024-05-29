import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {
  //need reference of P tag ElementRef
  constructor(private element : ElementRef,private render:Renderer2) { 
    //element.nativeElement.style.backgroundColor = 'yellow';
    //element.nativeElement.style.color='red'
    render.setStyle(element.nativeElement,'backgroundColor','gray')
  }

}
