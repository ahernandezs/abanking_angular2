import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

import { LoginComponent } from './login/login';
import { ImageComponent } from './image/image';
import { UnlockComponent } from './unlock/unlock';
import { UnlockPwdComponent } from './unlockpwd/unlockpwd';
import FooterComponent from '../share/footer/footer';

@Component({
    selector: 'auth',
    templateUrl: 'app/components/auth/auth.html',
    styleUrls: ['app/components/auth/auth.css'],
    directives: [
        ROUTER_DIRECTIVES,
        FooterComponent
    ]
})
export class AuthComponent {
	
	/**
	 * Class constructor. As this is the Container component for all the authentication children components
	 * it does only require Router as a constructor parameter.
	 */
	constructor(private router: Router) { }
}
