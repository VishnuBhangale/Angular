import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
selectedColor:string='#ffffff';
@Output() changeColor: EventEmitter<string> = new EventEmitter<string>(); //Event emitter for color change
  constructor() { }

  ngOnInit(): void {
    console.log('Default color', this.selectedColor);
    
  }
  onColorSelected(newColor:any)
  {
      this.selectedColor=newColor.target.value;
      console.log('new color', this.selectedColor);
      this.changeColor.emit(this.selectedColor);
  }
}
