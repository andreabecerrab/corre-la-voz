import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MarchaServiceService } from 'src/app/services/marcha-service.service';
import { Marcha } from 'src/app/models/Marcha';

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
      img: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  post() {
    //console.log(this.marchaForm.value);
    this._marchasServices.addMarcha(this.marchaForm.value);
    this.marchaForm.reset();
  }
}
