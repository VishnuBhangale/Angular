import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  //string Interpolation
  firstName: string = 'Jack';

  user = {
    name: 'Rocky',
    lastName: 'Bhai'
  };
  name:string='';

  // property binding
  imageUrl='https://media.istockphoto.com/id/1534040386/photo/an-outdoor-bamboo-gazebo-nestled-amidst-lush-greenery-offering-serene-relaxation-after-a.jpg?s=1024x1024&w=is&k=20&c=puHgSbTQpBTWvqIBd69gDXvBgDwpor6-fdYJoU0Hihc=';
  isDisabled = true;
  inputValue='Angular';
  constructor() { }

  ngOnInit(): void {
  }
  currentTime()
  {
    return new Date().toLocaleTimeString();
  }
  buttonClick()
  {
    alert('Button was clicked!')
  }
  //if we pass event from html
  // onInputChange(event:Event)
  // {
  //   let inputValue= event.target as HTMLInputElement
  //   console.log('input event log',inputValue.value);
  //   this.name = inputValue.value
  // }
  onInputChange(value : any) {    
    this.name = value;     
  }
}
