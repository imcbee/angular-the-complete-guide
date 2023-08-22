import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signForm: NgForm;
  defaultQuestion = "advanced";
  user = {
    email: '',
    subscription: '',
    password: ''
  }
  submitted = false;

  constructor() {}

  onSubmit() {
    console.log(this.signForm);
    this.user.email = this.signForm.value.email;
    this.user.subscription = this.signForm.value.subscription;
    this.user.password = this.signForm.value.password;
    this.submitted = true;

    this.signForm.reset();
  }

}
