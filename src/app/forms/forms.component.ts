import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

interface UserModel {
    name: FormControl<string | null>,
    surname: FormControl<string | null>,
    age: FormControl<string | null>,
    gender: FormControl<string | null>,
    number: FormControl<string | null>,
    adress: FormControl<string | null>,
    city: FormControl<string | null>,
    province: FormControl<string | null>,
    postalCode: FormControl<string | null>,
    email: FormControl<string | null>,
    password: FormControl<string | null>
}

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

  nameControl = new FormControl('', [Validators.required]);
  surnameControl = new FormControl('', [Validators.required]);
  ageControl = new FormControl('');
  genderControl = new FormControl('');
  numberControl = new FormControl('', [Validators.required]);
  adressControl = new FormControl('', [Validators.minLength(10)]);
  cityControl = new FormControl('', [Validators.required]);
  provinceControl = new FormControl('');
  postalCodeControl = new FormControl('', [Validators.maxLength(5), Validators.minLength(4), Validators.required]);
  emailControl = new FormControl('', [Validators.email, Validators.minLength(10), Validators.required]);
  passwordControl = new FormControl('', [Validators.maxLength(10), Validators.minLength(6), Validators.required]);


  userModel: FormGroup<UserModel> = new FormGroup({
    name: this.nameControl,
    surname: this.surnameControl,
    age: this.ageControl,
    gender: this.genderControl,
    number: this.numberControl,
    adress: this.adressControl,
    city: this.cityControl,
    province: this.provinceControl,
    postalCode: this.postalCodeControl,
    email: this.emailControl,
    password: this.passwordControl,
  });

  // constructor(private formBuilder: FormBuilder) {
  //     this.userModel = this.formBuilder.group({
  //       name: [''],
  //       surname: [''],
  //       age: [''],
  //       gender: [''],
  //       number: [''],
  //       adress: [''],
  //       city: [''],
  //       province: [''],
  //       postalCode: [''],
  //       email: [''],
  //       password: ['']
  //     })
  // }
}
