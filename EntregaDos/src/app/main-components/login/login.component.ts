import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Usuario } from 'src/app/models/Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  //login
  loginSucess: boolean = false;
  dataSubmitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      user_email: ['', Validators.required],
      password: ['', Validators.required],
    });

    if (typeof this.authenticationService.sessionData !== 'undefined') {
      this.authenticationService.loginAction(
        this.authenticationService.sessionData.user,
        this.authenticationService.sessionData.password
      );
    }
  }

  get formData() {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    this.dataSubmitted = true;
    let user = this.formData.user_email.value;
    let password = this.formData.password.value;
    this.authenticationService.loginAction(user, password);
  }
}
