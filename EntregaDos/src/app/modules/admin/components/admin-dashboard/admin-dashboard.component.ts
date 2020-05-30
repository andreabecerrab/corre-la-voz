import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MarchaServiceService } from 'src/app/services/marcha-service.service';

import { mimeType } from './mime-type-controller';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
})
export class AdminDashboardComponent implements OnInit {
  marchaForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private _marchasServices: MarchaServiceService
  ) {
    this.marchaForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      fecha: ['', Validators.required],
      desc: ['', Validators.required],
      hashtag: ['', Validators.required],
      direccion: ['', Validators.required],
      img: [null, Validators.required, mimeType],
    });
  }

  ngOnInit(): void {}

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.marchaForm.patchValue({ img: file });
    console.log(this.marchaForm);
    this.marchaForm.get('img').updateValueAndValidity();
  }

  post() {
    //console.log(this.marchaForm.value);
    this._marchasServices.addMarcha(this.marchaForm.value);
    this.marchaForm.reset();
  }
}
