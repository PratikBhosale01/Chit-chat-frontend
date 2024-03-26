import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  implements OnInit {
   registrationForm: FormGroup ;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      id: [''],
      first_name: ['', Validators.required],
      user_name: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      profile_pic: [''],
      email_id: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      // Handle form submission, e.g., send data to server
      console.log(this.registrationForm.value);
    } else {
      // Form is invalid, display error messages or handle as needed
    }
  }
}