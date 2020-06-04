import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Marcha } from 'src/app/models/Marcha';
import { MarchaServiceService } from 'src/app/services/marcha-service.service';

declare const activateT: any;
@Component({
  selector: 'app-edit-strike',
  templateUrl: './edit-strike.component.html',
  styleUrls: ['./edit-strike.component.sass'],
})
export class EditStrikeComponent implements OnInit {
  @Input() selectedEdit: Marcha;
  address: any;
  marchaEditForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private _marchaServices: MarchaServiceService
  ) {
    this.marchaEditForm = this.formBuilder.group({
      nombre: [''],
      fecha: [''],
      desc: [''],
      hashtag: [''],
      direccion: [''],
      img: [''],
    });
  }
  ngOnInit(): void {
    this.address = this.selectedEdit.direccion;
    activateT();
  }

  edit() {
    this._marchaServices.editMarcha(
      this.selectedEdit._id,
      this.marchaEditForm.value
    );
    this.marchaEditForm.reset();
  }
}
