import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
declare const fullHeight: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  
  
})
export class SidebarComponent implements OnInit {
  isOpen=true;

  constructor() {}

  ngOnInit(): void {
    fullHeight();
  }
  // onClick(){
  //   fullHeight();
  // }
  

 
  
}



