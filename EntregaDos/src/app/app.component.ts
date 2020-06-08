import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'EntregaDos';

  constructor(public authenticationService: AuthenticationService) {}

  ngOnInit(): void {}
}
