import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    // Inject the auth0 authentication service to document 
    constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) {}
    // Provide login entry function for login button
    loginWithRedirect() {
      this.auth.loginWithRedirect();
    }
}
