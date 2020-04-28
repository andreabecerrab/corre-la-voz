import { Component, OnInit } from '@angular/core';
declare const fullHeight: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    fullHeight();
  }
  // onClick(){
  //   fullHeight();
  // }
}
