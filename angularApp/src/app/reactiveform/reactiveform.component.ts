import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css'],
})
export class ReactiveformComponent implements OnInit {
  myReactiveForm!: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.myReactiveForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
        this.FirstNameNotAllowed,
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
      ]),
    });
  }

  OnSubmit() {
    console.log('fom submitted ....!', this.myReactiveForm);
  }
  // custom validator function
  FirstNameNotAllowed(control: FormControl): ValidationErrors | null {
    //   //console.log('FirstNameNotAllowed', control.value );

    //   const nameNotAllowed = ['Amrishpuri', 'Gulshan Gover', 'Tatya vinchu'];
    //  //Getting value of the form control
    //   const firstName = control.value as string; // Raj
    //   //check if the value is in the array or not
    //   if (nameNotAllowed.indexOf(firstName)  !== -1) {
    //     return {'firstNameNotAllowed': true}
    //   }
    //   return null;

    //==================Using set =============================
    // Set of the names that are not allowed

    const nameNotAllowed = new Set(['test', 'demo']);

    // getting the value of the formcontrol
    const firstName = control.value as string;

    // Check if the value is in the set of not allowed names

    if (nameNotAllowed.has(firstName)) {
      return { firstNameNotAllowed: true };
    }

    // If the value is allowed return null
    return null;
  }
  resetForm() {

    this.myReactiveForm.reset();
   }
}
