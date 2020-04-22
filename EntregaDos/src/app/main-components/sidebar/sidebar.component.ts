import { Component, OnInit } from '@angular/core';
declare const fullHeight: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  public pages:string[];

  constructor() { 
    this.pages = [
      "Perfil", "Agregar", "Marchas", "Cerrar Sesión"
    ]
  }

  ngOnInit(): void {
    fullHeight();
  }

  // onClick(){
  //   fullHeight();
  // }

}
