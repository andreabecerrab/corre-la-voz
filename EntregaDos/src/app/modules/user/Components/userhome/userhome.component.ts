import { Component, OnInit } from '@angular/core';
import { MarchaServiceService } from 'src/app/services/marcha-service.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
})
export class UserhomeComponent implements OnInit {
  strikes=[];
  constructor(private _adminServices: MarchaServiceService) {}

  ngOnInit(){
    this.strikes=this._adminServices.getMarchas();
  }
  
}
