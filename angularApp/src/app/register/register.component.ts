import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('registrationForm') registrationForm!: NgForm;

  countries = [
    { countryId: 1, name: "India" },
    { countryId: 2, name: "Australia" }
  ]

  states = [
    { id: 1, name: 'Maharashtra', countryId: 1 },
    { id: 2, name: 'Goa', countryId: 1 },
    { id: 3, name: 'Gujarat', countryId: 1 },
    { id: 4, name: 'Victoria', countryId: 2 },
    { id: 5, name: 'New South Wales', countryId: 2 },
    { id: 6, name: 'Queensland', countryId: 2 },
  ]
  gender = [ 
    { id: 1, name: "Male"},
    { id: 2, name: "Female"}

  ]
  selectedCountryId: number | null = null;
  filteredStates: any[] = [];

  val = {
    email: 'Hello@codemind.com',
    password: '1230',
    address: {
      country: 1, // Use countryId
      state: 1 // Use state id
    }
  }

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      // set the entire form
      this.registrationForm.setValue(this.val);

      // Set selectedCountryId and filteredStates based on the initial value
      this.selectedCountryId = this.val.address.country;
      this.onCountryChange(); // Update the filtered states
      // Set the state value in the form
      this.registrationForm.setValue(this.val);
      //this.registrationForm.controls['address'].controls['state'].setValue(this.val.address.state);
    }, 5000);
  }

  onSubmit(registerForm: NgForm) {
    console.log('Register Form', registerForm);
    // api/Register(registerForm.value);
  }

  onCountryChange() {
    if (this.selectedCountryId !== null) {
      this.filteredStates = this.states.filter(state => state.countryId == this.selectedCountryId);
    } else {
      this.filteredStates = [];
    }
  }
}
