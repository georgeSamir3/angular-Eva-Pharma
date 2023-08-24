// import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
// export class RegisterComponent {
  export class RegisterComponent implements OnInit {
    registrationForm: FormGroup;
  
    constructor(private formBuilder: FormBuilder) {}
  
    ngOnInit(): void {
      this.registrationForm = this.formBuilder.group({
        username: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
        heardAbout: ['', Validators.required]
      });
    }
  
    isFieldInvalid(fieldName: string): boolean {
      const field = this.registrationForm.get(fieldName);
      return field!.invalid && (field!.touched || field!.dirty);
    }
  
    isFieldTouched(fieldName: string): boolean {
      return this.registrationForm.get(fieldName)!.touched;
    }
  
    submitForm(): void {
      if (this.registrationForm.valid) {
        // Submit the registration form data
        console.log(this.registrationForm.value);
      }
    }
  }
// }
