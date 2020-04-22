import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  public idUsuario:number;
  public nombreUsuario:string;
  public apellidoU:string;
  public emailU:string;
  
  constructor() { 
    this.idUsuario = 5290;
    this.nombreUsuario = "Andrea";
    this.apellidoU = "Becerra";
    this.emailU = "andrea@gmail.com"
  }

  ngOnInit(): void {
  }

}
