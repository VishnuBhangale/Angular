import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  countries = [ 
    { countryId: 1, name: "India"},
    { countryId: 2, name: "Australia"}

  ]


  states = [
    {id: 1, name: 'Maharashtra', countryId: 1},
    {id: 2, name: 'Goa', countryId: 1},
    {id: 3, name: 'Gujarat', countryId: 1},
    {id: 4, name: 'Victoria', countryId: 2},
    {id: 5, name: 'New South Wales', countryId: 2},
    {id: 6, name: 'Queensland', countryId: 2},

  ]

  gender = [ 
    { id: 1, name: "Male"},
    { id: 2, name: "Female"}

  ]
selectedCountryId = null;
filteredStates : any[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(registerForm: NgForm){
    console.log('Register Form', registerForm.value);
    
      //api/Register(registerForm.value);
    
      }
      onCountryChange() {
        if (this.selectedCountryId) {
          this.filteredStates = this.states.filter(state => state.countryId == this.selectedCountryId);
        } else {
          this.filteredStates = [];
        }
      }

}
