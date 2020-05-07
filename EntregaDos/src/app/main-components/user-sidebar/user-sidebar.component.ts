import { Component, OnInit } from '@angular/core';


declare const fullHeight: any;

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  
  
})
export class UserSidebarComponent implements OnInit {
  
  constructor() {}

  ngOnInit(): void {
    fullHeight();
  }
  
  

 

}
