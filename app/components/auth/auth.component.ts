import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';

import { FooterComponent } from '../share/footer/footer.component';

import { LoginService } from './login/login.service';

/**
 * Component container for all the authentication components such as: login, image, unlock and unlockpwd.
 */
@Component({
    templateUrl: 'app/components/auth/auth.component.html',
    styleUrls: ['app/components/auth/auth.component.css'],
    directives: [
        ROUTER_DIRECTIVES,
        FooterComponent
    ],
	providers: [
		LoginService,
		HTTP_PROVIDERS
	]
})
export class AuthComponent {
	
	/**
	 * Class constructor. As this is the Container component for all the authentication children components
	 * it does only require Router as a constructor parameter.
	 */
	constructor(private router: Router) { }
}
