import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Country } from '../models/country';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css'],
})
export class ReactiveformComponent implements OnInit {
  countries: Country[] = [
    { name: 'India', code: '+91' },
    { name: 'United States', code: '+1' },
    { name: 'Canda', code: '+2' },
    // Add more countries as needed
  ];

  selectedCountryCode: string = '';
  myReactiveForm!: FormGroup;

  get phoneNumber(): any {
    return this.myReactiveForm.get('address.phoneNumber');
  }
  // Inject the formbuilder
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.myReactiveForm = this.fb.group({
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
          this.FirstNameNotAllowed,
        ],
      ],
      lastName: [],
      address: this.fb.group({
        country: [],
        phoneNumber: [],
      }),
      skills: this.fb.array([]),
    });
  }
  get skills() {
    return this.myReactiveForm.get('skills') as FormArray;
  }
  OnAddSkill() {
    this.skills.push(new FormControl('', Validators.required));
  }

  OnSubmit() {
    console.log('fom submitted ....!', this.myReactiveForm);
  }

  // custom validatgor function
  FirstNameNotAllowed(control: FormControl): ValidationErrors | null {
    //console.log('FirstNameNotAllowed', control.value );

    // const nameNotAllowed = ['Amrishpuri', 'Gulshan Gover', 'Tatya vinchu'];

    // const firstName = control.value as string; // Raj
    // if (nameNotAllowed.indexOf(firstName)  !== -1) {
    //   return {'firstNameNotAllowed': true}
    // }
    // return null;

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
  onChangeCountry(event: any) {
    console.log(event);

    const selectedCountry = this.countries.find(
      (country) => country.name == event.target.value
    );

    console.log(selectedCountry);

    if (selectedCountry) {
      this.selectedCountryCode = selectedCountry.code;
      this.phoneNumber?.setValue(this.selectedCountryCode); // prepend code automatically.
    } else {
      this.selectedCountryCode = '';
      this.phoneNumber.get('address.phoneNumber')?.setValue(''); // clear on invalid selection
    }
  }
  
}
