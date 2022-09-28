import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { AngularMaterialModule } from '../AngularMaterial/angular-material.module';

export interface UserForm
  extends FormGroup<{
    username: FormControl<string>;
    firstName: FormControl<string>;
    lastName: FormControl<string>;
    age: FormControl<number | null>;
  }> {}

@Component({
  selector: 'app-users',
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AngularMaterialModule],
})
export class UsersComponent implements OnInit {
  // username: FormControl<number> = new FormControl<number>(1);

  // instead of having the form type all inside our class 
  // form!: FormGroup<{
  //   username: FormControl<string>;
  //   firstName: FormControl<string>;
  //   lastName: FormControl<string>;
  //   age: FormControl<number | null>;
  // }>
  // We can have it like this in an interfaces folder
  form!: UserForm;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.nonNullable.group({
      username: this.fb.nonNullable.control('manos'),
      firstName: this.fb.nonNullable.control('Manolis'),
      lastName: this.fb.nonNullable.control('Trungu'),
      age: this.fb.nonNullable.control(33),
      // Or like this if we dont want to use nonNullable
      // age: this.fb.control(33, {initialValueIsDefault: true}),
    });
  }

  ngOnInit() {
    // this.username.patchValue(1);
  }

  loadFromHttp() {
    this.form.patchValue({
      username: 'test',
      lastName: 'last test',
      firstName: 'last',
      age: 100,
    });
  }

  resetForm() {
    this.form.reset();
  }
}
