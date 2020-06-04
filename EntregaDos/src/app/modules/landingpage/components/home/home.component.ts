import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor(public auth: AuthenticationService) {}

  ngOnInit(): void {}
}
