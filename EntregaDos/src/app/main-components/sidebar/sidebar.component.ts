import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

declare const fullHeight: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  constructor(public authenticationService: AuthenticationService) {}

  ngOnInit(): void {
    fullHeight();
  }

  logout(): void {
    this.authenticationService.logoutAction();
  }
}
