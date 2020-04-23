import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  // template:
  //         `
  //       <img src="assets/img/cover.jpg"> 
  //       `
})
export class ToastComponent implements OnInit {
  public exito:string;

  constructor() { 
    this.exito="¡exito!";
  }

  ngOnInit(): void {
  }

}
