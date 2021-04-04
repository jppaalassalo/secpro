import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    // Inject the authentication service into your component through the constructor
    constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) {}

    loginWithRedirect() {
      this.auth.loginWithRedirect();
    }
  
    //logout() {
    //  this.auth.logout({ returnTo: this.doc.location.origin });
    //}
}
