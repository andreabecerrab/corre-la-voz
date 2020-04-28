import { Component, OnInit } from '@angular/core';
declare const fullHeight: any;

@Component({
  selector: 'app-usersidebar',
  templateUrl: './usersidebar.component.html',
})
export class UsersidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    fullHeight();
  }
}
