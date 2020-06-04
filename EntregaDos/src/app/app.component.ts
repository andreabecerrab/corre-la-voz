import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'EntregaDos';
  userlogin: boolean = false;
  adminlogin: boolean = false;
  sessionType;

  constructor(public authenticationService: AuthenticationService) {}

  ngOnInit(): void {
    this.sessionType = this.authenticationService.getCurrent();
    console.log(this.sessionType.type);

    if (this.sessionType.type === 'admin') {
      this.adminlogin = true;
    } else if (this.sessionType.type === 'user') {
      this.userlogin = true;
    } else {
      this.userlogin = false;
      this.adminlogin = false;
    }
  }
}
