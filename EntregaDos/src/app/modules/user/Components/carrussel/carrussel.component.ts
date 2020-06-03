import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MarchaServiceService } from 'src/app/services/marcha-service.service';
import { mimeType } from './mime-type-controller';

@Component({
  selector: 'app-carrussel',
  templateUrl: './carrussel.component.html',
})
export class CarrusselComponent implements OnInit {
  addimageForm: FormGroup;

  @Input() id: string;
  @Input() imgs: [];

  constructor(
    private formBuilder: FormBuilder,
    private _marchasServices: MarchaServiceService
  ) {
    this.addimageForm = this.formBuilder.group({
      img: ['', Validators.required, mimeType],
    });
  }

  ngOnInit(): void {}

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.addimageForm.patchValue({ img: file });
    this.addimageForm.get('img').updateValueAndValidity();
  }

  post() {
    this._marchasServices.postImage(this.id, this.addimageForm.value.img);
    this.addimageForm.reset();
  }
}
