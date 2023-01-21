import { Component } from '@angular/core';
import { AuthGuardService } from './guards/auth-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TTSI Front UI';

  constructor(private auth: AuthGuardService) {}

  public isAdministrator = this.auth.isUserAuthenticated();

  public isLoggedIn = this.auth.isUserAuthenticated();
}
